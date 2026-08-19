export class InputController {
  constructor(domElement) {
    this.domElement = domElement;
    this.keys = new Set();
    this.justPressed = new Set();
    this.lookX = 0;
    this.lookY = 0;
    this.firePressed = false;
    this.fireHeld = false;
    this.mobileMove = { x: 0, y: 0 };
    this.mobileLook = { x: 0, y: 0 };
    this.mobileEnabled = false;

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
    if (this.isTouchDevice()) return;
    this.domElement.requestPointerLock?.();
  }

  isTouchDevice() {
    return window.matchMedia?.('(pointer: coarse)').matches ?? false;
  }

  setMobileEnabled(enabled) {
    this.mobileEnabled = enabled;
    if (!enabled) this.clearMobileState();
  }

  clearMobileState() {
    this.mobileMove.x = 0;
    this.mobileMove.y = 0;
    this.mobileLook.x = 0;
    this.mobileLook.y = 0;
    this.fireHeld = false;
  }

  bindMobileControls({ moveStick, moveKnob, lookStick, lookKnob, fireButton, actionButtons }) {
    this.#bindStick(moveStick, moveKnob, (x, y) => {
      this.mobileMove.x = x;
      this.mobileMove.y = y;
    });
    this.#bindStick(lookStick, lookKnob, (x, y) => {
      this.mobileLook.x = x;
      this.mobileLook.y = y;
    });

    fireButton.addEventListener('pointerdown', (event) => {
      if (!this.mobileEnabled) return;
      event.preventDefault();
      fireButton.setPointerCapture?.(event.pointerId);
      if (!this.fireHeld) this.firePressed = true;
      this.fireHeld = true;
    });
    const releaseFire = (event) => {
      fireButton.releasePointerCapture?.(event.pointerId);
      this.fireHeld = false;
    };
    fireButton.addEventListener('pointerup', releaseFire);
    fireButton.addEventListener('pointercancel', releaseFire);

    for (const button of actionButtons) {
      button.addEventListener('pointerdown', (event) => {
        if (!this.mobileEnabled) return;
        event.preventDefault();
        this.justPressed.add(button.dataset.mobileAction);
      });
    }
  }

  #bindStick(stick, knob, onMove) {
    let pointerId = null;
    let centerX = 0;
    let centerY = 0;
    let lastX = 0;
    let lastY = 0;

    const reset = (event) => {
      if (event.pointerId !== pointerId) return;
      pointerId = null;
      knob.style.transform = 'translate(-50%, -50%)';
      onMove(0, 0, 0, 0);
    };
    const update = (event) => {
      if (event.pointerId !== pointerId) return;
      const radius = Math.max(1, Math.min(stick.clientWidth, stick.clientHeight) * 0.31);
      const rawX = event.clientX - centerX;
      const rawY = event.clientY - centerY;
      const distance = Math.hypot(rawX, rawY);
      const scale = distance > radius ? radius / distance : 1;
      const x = rawX * scale / radius;
      const y = -rawY * scale / radius;
      knob.style.transform = `translate(calc(-50% + ${rawX * scale}px), calc(-50% + ${rawY * scale}px))`;
      onMove(x, y, event.clientX - lastX, event.clientY - lastY);
      lastX = event.clientX;
      lastY = event.clientY;
    };

    stick.addEventListener('pointerdown', (event) => {
      if (!this.mobileEnabled || pointerId !== null) return;
      event.preventDefault();
      const rect = stick.getBoundingClientRect();
      pointerId = event.pointerId;
      centerX = rect.left + rect.width / 2;
      centerY = rect.top + rect.height / 2;
      lastX = event.clientX;
      lastY = event.clientY;
      stick.setPointerCapture?.(pointerId);
      update(event);
    });
    stick.addEventListener('pointermove', update);
    stick.addEventListener('pointerup', reset);
    stick.addEventListener('pointercancel', reset);
  }

  down(code) {
    return this.keys.has(code);
  }

  consume(code) {
    const value = this.justPressed.has(code);
    this.justPressed.delete(code);
    return value;
  }

  consumeLook(dt = 0) {
    // A held right-stick deflection is a turn rate, not a one-time swipe.
    // The values below map a full deflection to roughly 2 radians per second.
    const result = {
      x: this.lookX + this.mobileLook.x * dt * 1000,
      y: this.lookY + this.mobileLook.y * dt * 680
    };
    this.lookX = 0;
    this.lookY = 0;
    return result;
  }

  movement() {
    let x = (this.keys.has('KeyD') ? 1 : 0) - (this.keys.has('KeyA') ? 1 : 0) + this.mobileMove.x;
    let y = (this.keys.has('KeyW') ? 1 : 0) - (this.keys.has('KeyS') ? 1 : 0) + this.mobileMove.y;
    const length = Math.hypot(x, y);
    if (length > 1) { x /= length; y /= length; }
    return { x, y };
  }

  isMoving() {
    const { x, y } = this.movement();
    return Math.abs(x) > 0.01 || Math.abs(y) > 0.01;
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
