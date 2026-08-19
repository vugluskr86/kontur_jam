import * as THREE from 'three';

export class RetroRenderer {
  constructor(host) {
    this.host = host;
    this.renderer = new THREE.WebGLRenderer({ antialias: false, powerPreference: 'high-performance' });
    this.renderer.setPixelRatio(1);
    this.renderer.outputColorSpace = THREE.SRGBColorSpace;
    this.renderer.toneMapping = THREE.NoToneMapping;
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
        hallucination: { value: 0 },
        ending: { value: 0 },
        flicker: { value: 0 }
      },
      vertexShader: `
        varying vec2 vUv;
        void main() {
          vUv = uv;
          gl_Position = vec4(position.xy, 0.0, 1.0);
        }
      `,
      fragmentShader: `
        uniform sampler2D tDiffuse;
        uniform vec2 resolution;
        uniform float time;
        uniform float infection;
        uniform float wail;
        uniform float hive;
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
          float distortion = infection * 0.65 + wail * 1.5 + hive * 0.55 + hallucination * 0.8;
          vec2 wobble = vec2(
            sin(vUv.y * (28.0 + hive * 18.0) + time * (4.0 + wail * 7.0)) * px.x * distortion,
            sin(vUv.x * 23.0 + time * 2.0) * px.y * hive * 0.35
          );

          float chroma = infection * 0.9 + wail * 1.6;
          float r = texture2D(tDiffuse, vUv + wobble + vec2(px.x * chroma, 0.0)).r;
          float g = texture2D(tDiffuse, vUv + wobble).g;
          float b = texture2D(tDiffuse, vUv + wobble - vec2(px.x * chroma, 0.0)).b;
          vec3 color = vec3(r, g, b);

          float scan = mod(floor(gl_FragCoord.y), 2.0);
          color *= mix(0.88, 1.0, scan);
          float noise = hash(floor(gl_FragCoord.xy) + floor(time * 18.0)) - 0.5;
          color += noise * (0.014 + infection * 0.038 + wail * 0.04);

          if (hallucination > 0.01) {
            float echo = texture2D(tDiffuse, vec2(1.0 - vUv.x, vUv.y) + wobble * 2.0).g;
            color.g = mix(color.g, echo, hallucination * 0.12);
          }

          color *= 1.0 - flicker * (0.22 + 0.20 * step(0.5, hash(vec2(floor(time * 24.0), 4.0))));

          // ending: -1 burn, +1 merge
          if (ending < -0.5) color *= vec3(1.0, 0.55, 0.38);
          if (ending > 0.5) color = mix(color, vec3(dot(color, vec3(0.333))), 0.25);

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
    this.width = Math.max(320, Math.min(560, Math.round(rect.width / 2.6)));
    this.height = Math.max(180, Math.round(this.width / aspect));
    this.renderer.setSize(this.width, this.height, false);
    this.target.setSize(this.width, this.height);
    this.material.uniforms.resolution.value.set(this.width, this.height);
    return { width: this.width, height: this.height, aspect };
  }

  render(scene, camera, time, effects = {}) {
    this.material.uniforms.time.value = time;
    this.material.uniforms.infection.value = effects.infection ?? 0;
    this.material.uniforms.wail.value = effects.wail ?? 0;
    this.material.uniforms.hive.value = effects.hive ?? 0;
    this.material.uniforms.hallucination.value = effects.hallucination ?? 0;
    this.material.uniforms.ending.value = effects.ending ?? 0;
    this.material.uniforms.flicker.value = effects.flicker ?? 0;

    this.renderer.setRenderTarget(this.target);
    this.renderer.clear();
    this.renderer.render(scene, camera);
    this.renderer.setRenderTarget(null);
    this.renderer.clear();
    this.renderer.render(this.postScene, this.postCamera);
  }
}
