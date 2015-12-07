const React = require('react');
const {g, circle} = React.DOM;
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
        const scale = size / 32;

        const transform = `translate(${x} ${y}) scale(${scale})`;

        return (
            <g transform={ transform } fill="#f00">
                <circle cx="0" cy="0" r="16" />
            </g>
        );
    }
}

module.exports = Rocket;
