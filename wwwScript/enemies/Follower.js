var React = require('react');
var { circle } = React.DOM;

var EventEmitter = require('../hna/EventEmitter');
var util = require('../hna/util');

var config = require('../config');

const { size, speed, spawnSleep, color } = config.follower;

function Follower(player, position) {
    EventEmitter.call(this);

    this.player = player;
    this.position = position;
}

util.inherits(Follower, EventEmitter);

Follower.prototype.update = function(delta, timestamp) {
    if (!this.spawn) {
        this.spawn = timestamp;
    }
    this.active = Math.min((timestamp - this.spawn) / spawnSleep, 1);
    if (this.active === 1) {
        var toMove = this.player.position.clone().substract(this.position).normalize();

        this.position.add(toMove.multiply(speed * delta));
    }
};

Follower.prototype.draw = function() {
    const x = this.position.x;
    const y = this.position.y;
    const scale = size / 32;

    const transform = `translate(${x} ${y}) scale(${scale})`;

    const newColor = util.getRGBA(color, this.active || 0);

    return (
        <g transform={ transform } fill={ newColor }>
            <circle cx="0" cy="0" r="16" />
        </g>
    );
};


module.exports = Follower;
