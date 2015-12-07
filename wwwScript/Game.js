const ReactDOM = require('react-dom');

const PlayScene = require('./PlayScene');

class Game {

    constructor() {
        this.scene = new PlayScene();
    }

    start() {
        requestAnimationFrame(stamp => this.run(stamp));
    }

    run(timestamp) {
        if (!this.lastTimestamp) { this.lastTimestamp = timestamp; }
        const timestampDelta = timestamp - this.lastTimestamp;

        this.scene.update(timestampDelta, timestamp);

        const rendered = this.scene.render();

        ReactDOM.render(
            rendered,
            document.querySelector('#body')
        );

        requestAnimationFrame(stamp => this.run(stamp));

        this.lastTimestamp = timestamp;
    }
}


module.exports = Game;
