export class InputController {
  constructor(domElement) {
    this.domElement = domElement;
    this.keys = new Set();
    this.justPressed = new Set();
    this.lookX = 0;
    this.lookY = 0;
    this.firePressed = false;
    this.fireHeld = false;

    window.addEventListener('keydown', (event) => {
      if (!this.keys.has(event.code)) this.justPressed.add(event.code);
      this.keys.add(event.code);
    });
    window.addEventListener('keyup', (event) => this.keys.delete(event.code));

    document.addEventListener('mousemove', (event) => {
      if (document.pointerLockElement !== this.domElement) return;
      this.lookX += event.movementX;
      this.lookY += event.movementY;
    });

    document.addEventListener('mousedown', (event) => {
      if (event.button !== 0 || document.pointerLockElement !== this.domElement) return;
      this.firePressed = true;
      this.fireHeld = true;
    });
    document.addEventListener('mouseup', (event) => {
      if (event.button === 0) this.fireHeld = false;
    });
  }

  requestPointerLock() {
    this.domElement.requestPointerLock();
  }

  down(code) {
    return this.keys.has(code);
  }

  consume(code) {
    const value = this.justPressed.has(code);
    this.justPressed.delete(code);
    return value;
  }

  consumeLook() {
    const result = { x: this.lookX, y: this.lookY };
    this.lookX = 0;
    this.lookY = 0;
    return result;
  }

  consumeFirePressed() {
    const value = this.firePressed;
    this.firePressed = false;
    return value;
  }

  endFrame() {
    this.justPressed.clear();
    this.firePressed = false;
  }
}
