export class CollisionWorld {
  constructor() {
    this.boxes = [];
  }

  clear() {
    this.boxes.length = 0;
  }

  addBox(x, z, width, depth, tag = 'wall') {
    const box = {
      minX: x - width / 2,
      maxX: x + width / 2,
      minZ: z - depth / 2,
      maxZ: z + depth / 2,
      active: true,
      tag
    };
    this.boxes.push(box);
    return box;
  }

  blocked(x, z, radius = 0.32) {
    return this.boxes.some((box) => box.active &&
      x > box.minX - radius && x < box.maxX + radius &&
      z > box.minZ - radius && z < box.maxZ + radius);
  }

  move(position, deltaX, deltaZ, radius = 0.32) {
    const nextX = position.x + deltaX;
    if (!this.blocked(nextX, position.z, radius)) position.x = nextX;
    const nextZ = position.z + deltaZ;
    if (!this.blocked(position.x, nextZ, radius)) position.z = nextZ;
    return position;
  }

  segmentHitsWall(from, to) {
    const steps = Math.max(2, Math.ceil(Math.hypot(to.x - from.x, to.z - from.z) / 0.2));
    for (let i = 1; i <= steps; i++) {
      const t = i / steps;
      const x = from.x + (to.x - from.x) * t;
      const z = from.z + (to.z - from.z) * t;
      if (this.boxes.some((box) => box.active && x > box.minX && x < box.maxX && z > box.minZ && z < box.maxZ)) return true;
    }
    return false;
  }
}
