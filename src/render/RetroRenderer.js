import * as THREE from 'three';

export class RetroRenderer {
  constructor(host) {
    this.host = host;
    this.renderer = new THREE.WebGLRenderer({ antialias: false, powerPreference: 'high-performance' });
    this.renderer.setPixelRatio(1);
    this.renderer.outputColorSpace = THREE.SRGBColorSpace;
    this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
    this.renderer.toneMappingExposure = 1.18;
    this.renderer.autoClear = false;
    this.renderer.domElement.className = 'game-canvas';
    host.prepend(this.renderer.domElement);

    this.width = 480;
    this.height = 270;
    this.target = new THREE.WebGLRenderTarget(this.width, this.height, {
      minFilter: THREE.NearestFilter,
      magFilter: THREE.NearestFilter,
      format: THREE.RGBAFormat,
      type: THREE.UnsignedByteType,
      depthBuffer: true
    });

    this.postScene = new THREE.Scene();
    this.postCamera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
    this.material = new THREE.ShaderMaterial({
      depthTest: false,
      depthWrite: false,
      toneMapped: false,
      uniforms: {
        tDiffuse: { value: this.target.texture },
        resolution: { value: new THREE.Vector2(this.width, this.height) },
        time: { value: 0 },
        infection: { value: 0 },
        wail: { value: 0 },
        hive: { value: 0 },
        slime: { value: 0 },
        slimeHazard: { value: 0 },
        hallucination: { value: 0 },
        ending: { value: 0 },
        flicker: { value: 0 }
      },
      vertexShader: `
        varying vec2 vUv;
        void main() { vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }
      `,
      fragmentShader: `
        uniform sampler2D tDiffuse;
        uniform vec2 resolution;
        uniform float time;
        uniform float infection;
        uniform float wail;
        uniform float hive;
        uniform float slime;
        uniform float slimeHazard;
        uniform float hallucination;
        uniform float ending;
        uniform float flicker;
        varying vec2 vUv;

        float hash(vec2 p) {
          p = fract(p * vec2(123.34, 456.21));
          p += dot(p, p + 45.32);
          return fract(p.x * p.y);
        }

        void main() {
          vec2 px = 1.0 / resolution;
          vec2 centered = vUv * 2.0 - 1.0;
          float radius2 = dot(centered, centered);

          // Gentle CRT/barrel curvature. Unlike a fisheye, this keeps level geometry readable.
          float barrel = 0.018 + infection * 0.010 + slime * 0.006;
          vec2 uv = vUv + centered * radius2 * barrel * 0.05;

          float distortion = infection * 0.65 + wail * 1.5 + hive * 0.55 + hallucination * 0.8 + slimeHazard * 0.65;
          vec2 wobble = vec2(
            sin(uv.y * (28.0 + hive * 18.0) + time * (4.0 + wail * 7.0)) * px.x * distortion,
            sin(uv.x * 23.0 + time * 2.0) * px.y * (hive * 0.35 + slime * 0.18)
          );

          float chroma = infection * 0.9 + wail * 1.6 + slimeHazard * 0.35;
          float r = texture2D(tDiffuse, uv + wobble + vec2(px.x * chroma, 0.0)).r;
          float g = texture2D(tDiffuse, uv + wobble).g;
          float b = texture2D(tDiffuse, uv + wobble - vec2(px.x * chroma, 0.0)).b;
          vec3 color = vec3(r, g, b);

          // Slime proximity is visible as a sickly reflected green/brown tint near screen edges.
          float edge = smoothstep(0.22, 0.98, length(centered));
          color = mix(color, color * vec3(0.72, 1.04, 0.68) + vec3(0.015, 0.030, 0.006), slime * edge * 0.22);
          color = mix(color, color * vec3(1.02, 0.67, 0.50), slimeHazard * edge * 0.20);

          float scan = mod(floor(gl_FragCoord.y), 2.0);
          color *= mix(0.90, 1.0, scan);
          float subscan = sin(gl_FragCoord.y * 3.14159265) * 0.006;
          color -= subscan;

          float noise = hash(floor(gl_FragCoord.xy) + floor(time * 18.0)) - 0.5;
          color += noise * (0.012 + infection * 0.034 + wail * 0.04 + slime * 0.010);

          if (hallucination > 0.01) {
            float echo = texture2D(tDiffuse, vec2(1.0 - uv.x, uv.y) + wobble * 2.0).g;
            color.g = mix(color.g, echo, hallucination * 0.12);
          }

          // Analog exposure pumping from dying lamps.
          color *= 1.0 - flicker * (0.22 + 0.20 * step(0.5, hash(vec2(floor(time * 24.0), 4.0))));

          // Stronger vignette than v0.5, but keep the center readable for combat.
          float vignette = 1.0 - smoothstep(0.34, 1.20, length(centered)) * (0.34 + infection * 0.10);
          color *= vignette;

          // Keep the CRT image moody, but never lose navigational geometry in crushed blacks.
          color = color * 1.06 + vec3(0.014, 0.019, 0.016);
          color = max(color, vec3(0.018, 0.025, 0.021));

          // ending modes: burn=-1, merge=1, broadcast=2, sever=-2
          if (ending < -1.5) {
            float mono = dot(color, vec3(0.299, 0.587, 0.114));
            color = mix(vec3(mono), vec3(mono * 0.72, mono * 0.84, mono * 0.82), 0.55);
          } else if (ending < -0.5) {
            color *= vec3(1.0, 0.55, 0.38);
          } else if (ending > 1.5) {
            float carrier = 0.5 + 0.5 * sin(gl_FragCoord.y * 0.17 + time * 35.0);
            color = mix(color, vec3(color.g, color.b, color.r), 0.12 * carrier);
            color += vec3(0.02, 0.035, 0.028);
          } else if (ending > 0.5) {
            color = mix(color, vec3(dot(color, vec3(0.333))), 0.25);
          }

          gl_FragColor = vec4(clamp(color, 0.0, 1.0), 1.0);
        }
      `
    });
    this.postScene.add(new THREE.Mesh(new THREE.PlaneGeometry(2, 2), this.material));
    this.resize();
  }

  resize() {
    const rect = this.host.getBoundingClientRect();
    const aspect = Math.max(0.5, rect.width / Math.max(1, rect.height));
    this.width = Math.max(320, Math.min(600, Math.round(rect.width / 2.45)));
    this.height = Math.max(180, Math.round(this.width / aspect));
    this.renderer.setSize(this.width, this.height, false);
    this.target.setSize(this.width, this.height);
    this.material.uniforms.resolution.value.set(this.width, this.height);
    return { width: this.width, height: this.height, aspect };
  }

  render(scene, camera, time, effects = {}) {
    for (const key of ['infection', 'wail', 'hive', 'slime', 'slimeHazard', 'hallucination', 'ending', 'flicker']) {
      this.material.uniforms[key].value = effects[key] ?? 0;
    }
    this.material.uniforms.time.value = time;

    this.renderer.setRenderTarget(this.target);
    this.renderer.clear();
    this.renderer.render(scene, camera);
    this.renderer.setRenderTarget(null);
    this.renderer.clear();
    this.renderer.render(this.postScene, this.postCamera);
  }
}
