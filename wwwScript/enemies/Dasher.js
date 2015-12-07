var React = require('react');
var { circle } = React.DOM;

var EventEmitter = require('../hna/EventEmitter');
var Vector2 = require('../hna/Vector2');
var util = require('../hna/util');

var config = require('../config');

const { size, vMax, spawnSleep, color, chargeTime, dashTime, slowdown } = config.dasher;

var STATE_CHARGE = 1;
var STATE_MOVE = 2;

class Dasher extends EventEmitter {
    constructor(player, position) {
        super();

        this.player = player;
        this.position = position;
    }


    update(_, timestamp) {
        if (!this.spawn) {
            this.spawn = timestamp;
        }
        this.active = Math.min((timestamp - this.spawn) / spawnSleep, 1);
        var cycleTime = (timestamp - this.spawn) % (chargeTime + dashTime);
        var newState = cycleTime < chargeTime ? STATE_CHARGE : STATE_MOVE;

        if (newState !== this.state) {
            switch (newState) {
                case STATE_CHARGE:
                    this.velocity = Vector2.zero;
                    break;
                case STATE_MOVE:
                    this.velocity = this.player.position.clone()
                        .substract(this.position).normalize().multiply(vMax);
                    break;
            }
        }
        this.state = newState;

        switch (this.state) {
            case STATE_CHARGE:
                this.colorFactor = 0.2 + 0.8 * cycleTime / dashTime;
                break;
            case STATE_MOVE:
                this.colorFactor = 1 - 0.8 * cycleTime / (chargeTime + dashTime);
                break;
        }

        if (this.active === 1) {
            this.position.add(this.velocity.multiply(slowdown));
        }
    }

    draw() {

        const x = this.position.x;
        const y = this.position.y;
        const scale = size / 32;

        const transform = `translate(${x} ${y}) scale(${scale})`;

        const newColor = util.getRGBA(
            Math.round(color.r * this.colorFactor),
            Math.round(color.g * this.colorFactor),
            Math.round(color.b * this.colorFactor),
            this.active || 0);

        return (
            <g transform={ transform } fill={ newColor }>
                <circle cx="0" cy="0" r="16" />
            </g>
        );
    }
}

module.exports = Dasher;
