'use strict';
//const ReactDOM = require('react-dom');

const PlayScene = require('./PlayScene');
//const CreditScene = require('./CreditScene');

class Game {

    constructor(context) {
        this.context = context;
        this.scene = new PlayScene();
    }

    start() {
        requestAnimationFrame(stamp => this.run(stamp));
    }

    run(timestamp) {
        if (!this.lastTimestamp) { this.lastTimestamp = timestamp; }
        const timestampDelta = timestamp - this.lastTimestamp;

        this.scene.update(timestampDelta, timestamp);
        this.scene.render(this.context);

        requestAnimationFrame(stamp => this.run(stamp));

        this.lastTimestamp = timestamp;
    }
}


module.exports = Game;
