var EventEmitter = require('../hna/EventEmitter');
var util = require('../hna/util');

var config = require('../config');

const { size, speed, spawnSleep, color } = config.follower;

class Follower extends EventEmitter {
    constructor(player, position) {
        super();

        this.player = player;
        this.position = position;
    }


    update(delta, timestamp) {
        if (!this.spawn) {
            this.spawn = timestamp;
        }
        this.active = Math.min((timestamp - this.spawn) / spawnSleep, 1);
        if (this.active === 1) {
            var toMove = this.player.position.clone().substract(this.position).normalize();

            this.position.add(toMove.multiply(speed * delta));
        }
    }

    draw(context) {
        const x = this.position.x;
        const y = this.position.y;
        const radius = size / 2;

        const newColor = util.getRGBA(color, this.active || 0);

        context.beginPath();
        context.arc(x, y, radius, 0, 2*Math.PI)
        context.fillStyle = newColor;
        context.fill();
        context.closePath();
    }
}

module.exports = Follower;
