const React = require('react');
const { svg, rect } = React.DOM;
const Text = require('./Text');

class MenuScene {
    constructor() {
        this.selected = 0;
    }

    update(delta, timestamp) {

    }

    render() {
        const getColor = index => this.selected === index ? 'gold' : 'transparent';

        return (
            <svg viewBox="0 0 640 640" preserveAspectRatio="xMidYMid meet"
                 width={window.innerWidth} height={window.innerHeight}>

                <Text x={96} y={72} fontSize={64} fill="#0a0">Attack</Text>
                <Text x={160} y={112} fontSize={32} fill="#a00">of the</Text>
                <Text x={224} y={180} fontSize={64} fill="#00a">Circles</Text>

                <g transform="translate(64 256)"
                   stroke="black"
                   onMouseEnter={ this.handleSelect.bind(this, 0) }>
                    <rect x="0" y="0" width="512" height="64" rx="8" ry="8"
                          stroke="black" strokeWidth="4" fill={ getColor(0) } />
                      <Text x={32} y={48} fontSize={32}>
                        start game
                    </Text>
                </g>
                <g transform="translate(64 336)"
                   stroke="black"
                   onMouseEnter={ this.handleSelect.bind(this, 1) }>
                    <rect x="0" y="0" width="512" height="64" rx="8" ry="8"
                          stroke="black" strokeWidth="4" fill={ getColor(1) } />
                      <Text x={32} y={48} fontSize={32}>
                        Credits
                    </Text>
                </g>
            </svg>
        );
    }

    handleSelect(index) {
        this.selected = index;
    }
}

module.exports = MenuScene;
