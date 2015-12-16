'use strict';
const Player = require('./Player');
const Rocket = require('./Rocket');
const Spawner = require('./Spawner');

const viewBox = require('./config').viewBox;

class PlayScene {
    constructor() {

        // FIXME: player should be players and passed in here
        const player = new Player(0);
        player.on('shoot', () => {
            const rocket = new Rocket(player.position, player.direction);
            this.rockets.push(rocket);
            rocket.on('dead', () => this.rockets = this.rockets.filter(r => r !== rocket));
        });
        this.players = [player];

        this.enemies = [];
        this.rockets = [];
        this.spawner = new Spawner(player);
        this.spawner.on('spawn', cmp => this.enemies.push(cmp));

        this.players = [player];
    }

    update(delta, timestamp) {
        delta = Math.min(delta, 1000);

        this.spawner.update(delta, timestamp);
        this.players.forEach(p => p.update(delta, timestamp));
        this.enemies.forEach(e => e.update(delta, timestamp));
        this.rockets.forEach(r => r.update(delta, timestamp));

        const killed = this.enemies.filter(
            enemy => this.rockets.some(
                rocket => enemy.position.distance(rocket.position) < 10));

        killed.forEach(enemy => this.enemies = this.enemies.filter(e => e !== enemy));

        if (this.enemies.some(enemy => enemy.position.distance(this.players[0].position) < 16)) {
            console.log('dead');
        }
    }

    render(context) {
        //context.translate(this.players[0].position.x, this.players[0].position.y);
        //const playerPosition = this.players[0].position;

        context.clearRect(0, 0, 1e6, 1e6);
        context.beginPath();
        context.rect(0, 0, 640, 640);
        context.strokeStyle = '#000';
        context.stroke();

        this.enemies.forEach(e => e.draw(context));
        this.players.forEach(p => p.draw(context));
        this.rockets.forEach(r => r.draw(context));
    }
}

module.exports = PlayScene;
