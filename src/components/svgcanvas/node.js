// eslint-disable-next-line
export class Node {
  constructor(x, y, colour, velocity, canvas) {
    this.x = x;
    this.y = y;
    this.colour = colour;
    this.velocity = velocity;
    this.direction = Math.random() * 360;
    this.canvas = canvas;
  }

  isWithinRadius(x, y, radius, type=Boolean(false)) {
    if (type) {
      radius = radius / 1.5;
    }
    let distance = Math.sqrt(Math.pow(this.x - x, 2) + Math.pow(this.y - y, 2));
    return distance <= radius;
  }

  updatePosition() {
    let radians = (this.direction * Math.PI) / 180;

    this.x += Math.cos(radians) * this.velocity;
    this.y += Math.sin(radians) * this.velocity;

    if (this.x > this.canvas.width || this.x < 0) {
      this.direction = (180 - this.direction) % 360;
      this.x = Math.min(Math.max(this.x, 0), this.canvas.width);
    }

    if (this.y > this.canvas.height || this.y < 0) {
      this.direction = (360 - this.direction) % 360;
      this.y = Math.min(Math.max(this.y, 0), this.canvas.height);
    }
  }
}
