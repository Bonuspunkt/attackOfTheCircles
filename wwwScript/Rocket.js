const EventEmitter = require('./hna/EventEmitter');

const config = require('./config');
const { size, speed, lifetime } = config.rocket;

class Rocket extends EventEmitter {
    constructor(position, direction) {
        super();

        this.position = position.clone();
        this.move = direction.clone().multiply(speed);
    }

    update(delta, timestamp) {
        if (!this.start) {
            this.start = timestamp;
        }

        if (timestamp - this.start > lifetime) {
            this.emit('dead');
        } else {
            this.position.add(this.move.clone().multiply(delta));
        }
    }

    draw(context) {
        const x = this.position.x;
        const y = this.position.y;
        const radius = size / 2;

        context.beginPath();
        context.arc(x, y, radius, 0, 2 * Math.PI);
        context.fillStyle = '#f00';
        context.fill();
        context.closePath();
    }
}

module.exports = Rocket;
