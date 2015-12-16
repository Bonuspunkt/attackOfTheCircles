'use strict';
const EventEmitter = require('./hna/EventEmitter');
const Vector2 = require('./hna/Vector2');

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

    draw(context) {

        const x = this.position.x;
        const y = this.position.y;
        const radius = size / 2;

        context.beginPath();
        context.arc(x, y, radius, 0, 2 * Math.PI)
        context.fillStyle = '#000';
        context.fill();
        context.closePath();

        /*
        context.translate(this.position.x, this.position.y);
        context.rotate(this.angle);

        context.rotate(-this.angle);
        context.translate(-this.position.x, -this.position.y);
        */

        if (this.aim) {
            context.beginPath();
            context.moveTo(this.position.x, this.position.y);
            context.lineTo(
                x + this.direction.x * 1e6,
                y + this.direction.y * 1e6);
            context.strokeStyle = 'rgba(255,0,0, 0.25)';
            context.stroke();
            context.closePath();
        }
    }
}


module.exports = Player;
