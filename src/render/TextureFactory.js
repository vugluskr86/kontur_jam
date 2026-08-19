import * as THREE from 'three';

export const RETRO_PALETTE = {
  black: '#050708', deep: '#0d1617', dark: '#1f2c2f', slate: '#34484e',
  steel: '#526a73', light: '#8098a0', pale: '#b4c3c1', white: '#d8dfd5',
  darkBrown: '#2a1714', brown: '#5b3023', rust: '#99482c', orange: '#d07035',
  darkGreen: '#0f2f1e', green: '#256b39', lime: '#55b64a', yellow: '#caa348'
};

function canvasTexture(draw, width = 64, height = 64) {
  const canvas = document.createElement('canvas');
  canvas.width = width;
  canvas.height = height;
  const ctx = canvas.getContext('2d');
  ctx.imageSmoothingEnabled = false;
  draw(ctx, width, height);
  const texture = new THREE.CanvasTexture(canvas);
  texture.magFilter = THREE.NearestFilter;
  texture.minFilter = THREE.NearestMipmapNearestFilter;
  texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
  texture.colorSpace = THREE.SRGBColorSpace;
  return texture;
}

export class TextureFactory {
  constructor(random = Math.random) {
    this.random = random;
    this.cache = new Map();
  }

  get(kind) {
    if (this.cache.has(kind)) return this.cache.get(kind);
    const texture = this.#create(kind);
    this.cache.set(kind, texture);
    return texture;
  }

  sign(title, subtitle = '') {
    return canvasTexture((ctx, w, h) => {
      ctx.fillStyle = RETRO_PALETTE.dark;
      ctx.fillRect(0, 0, w, h);
      ctx.strokeStyle = RETRO_PALETTE.pale;
      ctx.lineWidth = 3;
      ctx.strokeRect(4, 4, w - 8, h - 8);
      ctx.fillStyle = RETRO_PALETTE.white;
      ctx.font = 'bold 25px monospace';
      ctx.fillText(title, 14, 32);
      ctx.fillStyle = RETRO_PALETTE.orange;
      ctx.font = 'bold 11px monospace';
      ctx.fillText(subtitle, 15, 53);
    }, 256, 64);
  }

  #create(kind) {
    const p = RETRO_PALETTE;
    const r = this.random;
    return canvasTexture((ctx) => {
      if (kind === 'industrialWall') {
        ctx.fillStyle = p.light; ctx.fillRect(0, 0, 64, 64);
        ctx.fillStyle = p.steel;
        for (let y = 0; y < 64; y += 16) ctx.fillRect(0, y, 64, 2);
        ctx.fillStyle = p.dark;
        for (let x = 0; x < 64; x += 16) ctx.fillRect(x, 0, 2, 64);
        ctx.fillStyle = p.rust; ctx.fillRect(0, 33, 64, 7);
        ctx.fillStyle = p.orange; ctx.fillRect(0, 33, 64, 2);
        ctx.fillStyle = p.pale;
        for (let i = 0; i < 35; i++) ctx.fillRect((r() * 64) | 0, (r() * 31) | 0, 1, 1);
      } else if (kind === 'archiveWall') {
        ctx.fillStyle = p.slate; ctx.fillRect(0, 0, 64, 64);
        ctx.fillStyle = p.steel;
        for (let y = 0; y < 64; y += 8) ctx.fillRect(0, y, 64, 1);
        ctx.fillStyle = p.yellow; ctx.fillRect(0, 47, 64, 2);
        ctx.fillStyle = p.dark; ctx.fillRect(6, 7, 52, 35);
        ctx.fillStyle = p.green;
        for (let i = 0; i < 14; i++) ctx.fillRect(10 + (i % 7) * 7, 11 + ((i / 7) | 0) * 11, 2, 2);
      } else if (kind === 'reactorWall') {
        ctx.fillStyle = p.dark; ctx.fillRect(0, 0, 64, 64);
        ctx.fillStyle = p.slate;
        for (let x = 0; x < 64; x += 8) ctx.fillRect(x, 0, 2, 64);
        ctx.fillStyle = p.rust; ctx.fillRect(0, 28, 64, 6);
        ctx.fillStyle = p.yellow;
        for (let x = -10; x < 70; x += 15) {
          ctx.save(); ctx.translate(x, 29); ctx.rotate(-0.7); ctx.fillRect(0, 0, 5, 15); ctx.restore();
        }
      } else if (kind === 'organicWall') {
        ctx.fillStyle = p.darkBrown; ctx.fillRect(0, 0, 64, 64);
        ctx.fillStyle = p.brown;
        for (let y = 0; y < 64; y += 8) {
          ctx.beginPath(); ctx.moveTo(0, y);
          for (let x = 0; x <= 64; x += 8) ctx.lineTo(x, y + Math.sin((x + y) * 0.2) * 3);
          ctx.strokeStyle = p.brown; ctx.lineWidth = 4; ctx.stroke();
        }
        ctx.fillStyle = p.green;
        for (let i = 0; i < 30; i++) ctx.fillRect((r() * 64) | 0, (r() * 64) | 0, 2, 2);
        ctx.fillStyle = p.lime;
        for (let i = 0; i < 10; i++) ctx.fillRect((r() * 64) | 0, (r() * 64) | 0, 1, 1);
      } else if (kind === 'whiteWall') {
        ctx.fillStyle = p.white; ctx.fillRect(0, 0, 64, 64);
        ctx.fillStyle = p.pale;
        for (let i = 0; i < 30; i++) ctx.fillRect((r() * 64) | 0, (r() * 64) | 0, 1, 1);
      } else if (kind === 'floor') {
        ctx.fillStyle = p.brown; ctx.fillRect(0, 0, 64, 64);
        ctx.fillStyle = p.darkBrown;
        for (let y = 0; y < 64; y += 8) ctx.fillRect(0, y, 64, 1);
        for (let x = 0; x < 64; x += 16) ctx.fillRect(x, 0, 1, 64);
        ctx.fillStyle = p.rust;
        for (let i = 0; i < 55; i++) ctx.fillRect((r() * 64) | 0, (r() * 64) | 0, 1, 1);
      } else if (kind === 'organicFloor') {
        ctx.fillStyle = p.darkBrown; ctx.fillRect(0, 0, 64, 64);
        ctx.fillStyle = p.rust;
        for (let i = 0; i < 50; i++) ctx.fillRect((r() * 64) | 0, (r() * 64) | 0, 2, 1);
        ctx.strokeStyle = p.green; ctx.lineWidth = 2;
        for (let y = 4; y < 64; y += 12) { ctx.beginPath(); ctx.moveTo(0, y); ctx.bezierCurveTo(18, y + 8, 42, y - 8, 64, y + 2); ctx.stroke(); }
      } else if (kind === 'ceiling') {
        ctx.fillStyle = p.steel; ctx.fillRect(0, 0, 64, 64);
        ctx.fillStyle = p.slate;
        for (let x = 0; x < 64; x += 16) ctx.fillRect(x, 0, 1, 64);
        for (let y = 0; y < 64; y += 16) ctx.fillRect(0, y, 64, 1);
        ctx.fillStyle = p.pale;
        for (let i = 0; i < 20; i++) ctx.fillRect((r() * 64) | 0, (r() * 64) | 0, 1, 1);
      } else if (kind === 'crate') {
        ctx.fillStyle = p.darkBrown; ctx.fillRect(0, 0, 64, 64);
        ctx.fillStyle = p.rust; ctx.fillRect(5, 5, 54, 54);
        ctx.fillStyle = p.brown; ctx.fillRect(9, 9, 46, 46);
        ctx.fillStyle = p.darkBrown; ctx.fillRect(13, 13, 38, 38);
        ctx.fillStyle = p.yellow;
        for (let x = -20; x < 80; x += 18) { ctx.save(); ctx.translate(x, 4); ctx.rotate(0.75); ctx.fillRect(0, 0, 6, 78); ctx.restore(); }
        ctx.fillStyle = p.darkBrown; ctx.fillRect(14, 14, 36, 36);
      } else if (kind === 'door') {
        ctx.fillStyle = p.slate; ctx.fillRect(0, 0, 64, 64);
        ctx.fillStyle = p.light; ctx.fillRect(4, 4, 56, 56);
        ctx.fillStyle = p.dark; ctx.fillRect(8, 8, 48, 48);
        ctx.fillStyle = p.steel; ctx.fillRect(11, 11, 42, 42);
        ctx.fillStyle = p.rust; ctx.fillRect(0, 30, 64, 9);
      } else if (kind === 'server') {
        ctx.fillStyle = p.dark; ctx.fillRect(0, 0, 64, 64);
        ctx.fillStyle = p.slate;
        for (let y = 5; y < 60; y += 10) ctx.fillRect(6, y, 52, 7);
        for (let y = 8; y < 60; y += 10) {
          ctx.fillStyle = y % 20 ? p.green : p.orange;
          ctx.fillRect(11, y, 2, 2); ctx.fillRect(17, y, 2, 2);
        }
      }
    });
  }
}
