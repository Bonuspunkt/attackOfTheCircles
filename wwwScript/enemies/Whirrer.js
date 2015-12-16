var EventEmitter = require('../hna/EventEmitter');
var util = require('../hna/util');
var Vector2 = require('../hna/Vector2');

var config = require('../config');

const {size, speed, spawnSleep, color, radius, rotationSpeed} = config.whirrer;

function Whirrer(player, position) {
    EventEmitter.call(this);

    this.player = player;
    this.basePosition = position;
    var offset = this.basePosition.clone()
        .substract(this.player.position)
        .normalize()
        .multiply(radius);
    this.position = this.basePosition.clone().add(offset);
    this.rotation = Math.atan2(offset.y, offset.x);
}

util.inherits(Whirrer, EventEmitter);

Whirrer.prototype.update = function(delta, timestamp) {
    if (!this.spawn) {
        this.spawn = timestamp;
    }
    this.active = Math.min((timestamp - this.spawn) / spawnSleep, 1);

    if (this.active === 1) {
        var toMove = this.player.position.clone()
            .substract(this.basePosition).normalize();
        this.basePosition.add(toMove.multiply(speed * delta));
    }

    this.rotation = (timestamp - this.spawn) * rotationSpeed % (2 * Math.PI);
    var offset = new Vector2(
            Math.sin(this.rotation),
            Math.cos(this.rotation)
    ).multiply(radius);
    this.position = this.basePosition.clone().add(offset);
};

Whirrer.prototype.draw = function(context) {
    const x = this.position.x;
    const y = this.position.y;
    const radius = size / 2;

    const newColor = util.getRGBA(color, this.active || 0);

    context.beginPath();
    context.arc(x, y, radius, 0, 2*Math.PI)
    context.fillStyle = newColor;
    context.fill();
    context.closePath();

};


module.exports = Whirrer;
