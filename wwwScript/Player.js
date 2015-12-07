const React = require('react');
const { g, circle, line } = React.DOM;

var EventEmitter = require('./hna/EventEmitter');

var Vector2 = require('./hna/Vector2');

var config = require('./config');

const VIEWBOX_WIDTH = config.viewBox.width;
const VIEWBOX_HEIGHT = config.viewBox.height;
const { size, speed, aimSpeed, shootInterval } = config.player;

function getGamepads() {
    return (
        navigator.getGamepads && navigator.getGamepads() ||
        navigator.webkitGetGamepads && navigator.webkitGetGamepads()
    );
}


class Player extends EventEmitter {
    constructor(index) {
        super();

        // FIXME: spawn position should be based on player index
        this.position = new Vector2(VIEWBOX_WIDTH / 2, VIEWBOX_HEIGHT / 2);
        this.direction = new Vector2(1, 0);
        this.gamepadIndex = index;

        this.lastShot = 0;
    }

    update(delta, timestamp) {

        var gamepad = getGamepads()[this.gamepadIndex];

        if (!gamepad) {
            return;
        }

        this.aim = gamepad.buttons[6].pressed;

        if (Math.abs(gamepad.axes[0]) > 0.15 ||
            Math.abs(gamepad.axes[1]) > 0.15) {
            var movement = new Vector2(gamepad.axes[0], gamepad.axes[1])
                .multiply(this.aim ? aimSpeed : speed);
            this.position.add(movement.multiply(delta));
        }

        if (Math.abs(gamepad.axes[2]) > 0.2 ||
            Math.abs(gamepad.axes[3]) > 0.2) {
            this.angle = Math.atan2(gamepad.axes[3], gamepad.axes[2]);
            this.direction.x = gamepad.axes[2];
            this.direction.y = gamepad.axes[3];
            this.direction.normalize();
        }

        if (gamepad.buttons[7].pressed && this.canShot(timestamp)) {
            this.emit('shoot');
        }
    }

    canShot(timestamp) {
        if (this.lastShot < timestamp - shootInterval) {
            this.lastShot = timestamp;
            return true;
        }
        return false;
    }

    draw() {

        const aimColor = 'rgba(255,0,0, 0.25)';
        const aimEl = (
            <line x1={size / 2} y1="0" x2={1e6} stroke={aimColor} y2="0" strokeWidth="2" />
        );

        const x = this.position.x;
        const y = this.position.y;
        const rotation = (this.angle || 0) * 180 / Math.PI;

        const scale = size / 32;

        const transform = `translate(${x} ${y}) rotate(${rotation}) scale(${scale})`;

        return (
            <g key={this.gamepadIndex} transform={ transform }>
                <circle cx="0" cy="0" r="16" fill="black" />
                <path d="M0 -14 L8-2 H3 L5 13 H-5 L-3-2 H-8 Z" stroke="white" strokeWidth="1" transform="rotate(90)"/>
                { this.aim ? aimEl : null }
            </g>
        );
    }
}


module.exports = Player;
