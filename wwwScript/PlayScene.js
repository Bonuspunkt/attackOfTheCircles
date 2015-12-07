const Scene = require('./Scene');
const Player = require('./Player');
const Rocket = require('./Rocket');
const Spawner = require('./Spawner');

const React = require('react');
const {svg} = React.DOM;

const Text = require('./Text');

const viewBox = require('./config').viewBox;

const fontSize = 12;

class PlayScene extends Scene {
    constructor() {
        super();

        // FIXME: player should be players and passed in here
        const player = new Player(0);
        player.on('shoot', () => {
            const rocket = new Rocket(player.position, player.direction);
            this.addComponent(rocket);
        });
        this.players = [player];

        this.spawner = new Spawner(player);
        this.spawner.on('spawn', cmp => this.addComponent(cmp));

        this.addComponent(player);
        this.addComponent(this.spawner);
    }

    update(delta, timestamp) {
        delta = Math.min(delta, 1000);

        super.update(delta, timestamp);

        // todo: detect rocket-enemy collision
        const rockets = this.components.filter(cmp => cmp instanceof Rocket);
        const enemies = this.components
            .filter(cmp => !(cmp instanceof Player) &&
                           !(cmp instanceof Rocket) &&
                           !(cmp instanceof Spawner));

        const killed = enemies.filter(
            enemy => rockets.some(
                rocket => enemy.position.distance(rocket.position) < 10));

        killed.forEach(enemy => this.removeComponent(enemy));

        if (enemies.some(enemy => enemy.position.distance(this.players[0].position) < 16)) {
            console.log('dead');
        }
    }

    render() {
        const playerPosition = this.players[0].position;

        const viewX = playerPosition.x - viewBox.width / 2;
        const viewY = playerPosition.y - viewBox.height / 2;

        const viewBoxDimensions = `${viewX} ${viewY} ${viewBox.width} ${viewBox.height}`;

        return (
            <svg viewBox={viewBoxDimensions} preserveAspectRatio="xMidYMid meet"
                 width={window.innerWidth} height={window.innerHeight}>
                <Text x={viewX} y={viewY + fontSize} fontSize={fontSize}>
                    { Math.round(viewX) + '/' + Math.round(viewY) }
                </Text>
                <Text x={viewX} y={viewY + 2 * fontSize} fontSize={fontSize} fill="green">
                    { 'cmps: ' + this.components.length }
                </Text>
                <rect x={viewX} y={viewY} width={viewBox.width} height={viewBox.height}
                    stroke="grey" fill="transparent"/>
                { this.renderComponents() }
            </svg>
        );

    }

    renderComponents() {
        return this.components.filter(cmp => cmp.draw).map(cmp => cmp.draw());
    }
}

module.exports = PlayScene;
