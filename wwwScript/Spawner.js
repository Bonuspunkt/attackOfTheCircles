const EventEmitter = require('./hna/EventEmitter');
const Vector2 = require('./hna/Vector2');

const Follower = require('./enemies/Follower');
const Dasher = require('./enemies/Dasher');
const Whirrer = require('./enemies/Whirrer');

const config = require('./config');

const { width, height } = config.viewBox;
const { interval, minDistance } = config.spawner;


// FIXME: player should be a players array
class Spawner extends EventEmitter {

    constructor(player) {
        super();
        this.player = player;
        this.lastSpawn = 0;
    }

    update(_, timestamp) {

        if (this.lastSpawn + interval > timestamp) {
            return;
        }


        let x = Math.random() - 0.5;
        let y = Math.random() - 0.5;

        x = x * width + (x < 0 ? -1 : 1) * minDistance + this.player.position.x;
        y = y * height + (y < 0 ? -1 : 1) * minDistance + this.player.position.y;

        const spawn = new Vector2(x, y);

        const seed = Math.random();
        let Enemy;
        if (seed < 0.1) {
            Enemy = Whirrer;
        } else if (seed > 0.8) {
            Enemy = Dasher;
        } else {
            Enemy = Follower;
        }
        const enemy = new Enemy(this.player, spawn);

        this.emit('spawn', enemy);

        this.lastSpawn = timestamp;
    }
}

module.exports = Spawner;
