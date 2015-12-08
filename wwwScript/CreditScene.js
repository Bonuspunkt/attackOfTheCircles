const React = require('react');
const { svg } = React.DOM;
const Text = require('./Text');

class CreditScene {

    constructor() {
        this.y = -640;
    }

    update(delta, timestamp) {
        this.y++;

        if (this.y > 300) {
            this.y = -640;
        }
    }

    render() {
        var viewBox = `-10 ${this.y} 640 640`;

        return (
            <svg viewBox={ viewBox } preserveAspectRatio="xMidYMid meet"
                 width={window.innerWidth} height={window.innerHeight}>
                <Text fontSize={ 24 } x={ 0 } y={ 0 }>
                    === MUSIC ===
                </Text>
                <Text fontSize={ 16 } x={ 0 } y={ 30 }>
                    Carosone - The Gigolo Song (cdk Remix) by cdk
                </Text>
                <Text fontSize={ 8 } x={ 0 } y={ 40 }>
                    (c) 2015 Licensed under a Creative Commons Attribution Noncommercial  (3.0) license.
                </Text>
                <Text fontSize={ 8 } x={ 0 } y={ 50 }>
                    http://ccmixter.org/files/cdk/52193 Ft: Carosone
                </Text>

                <Text fontSize={ 16 } x={ 0 } y={ 80 }>
                    Paint The Sky by Dysfunction_AL
                </Text>
                <Text fontSize={ 8 } x={ 0 } y={ 90 }>
                    (c) 2015 Licensed under a Creative Commons Attribution (3.0) license.
                </Text>
                <Text fontSize={ 8 } x={ 0 } y={ 100 }>
                    http://ccmixter.org/files/destinazione_altrove/49997 Ft: MissJudged
                </Text>

                <Text fontSize={ 24 } x={ 0 } y={ 160 }>
                    === FONT ===
                </Text>
                <Text fontSize={ 16 } x={ 0 } y={ 190 }>
                    KenPixel Blocks
                </Text>
                <Text fontSize={ 8 } x={ 0 } y={ 200 }>
                    http://www.kenney.nl/
                </Text>

                <Text fontSize={ 24 } x={ 0 } y={ 260 }>
                    === FOR MORE INFOS SEE GITHUB REPO ===
                </Text>
                <Text fontSize={ 16 } x={ 0 } y={ 290 }>
                    https://github.com/Bonuspunkt/attackOfTheSquares
                </Text>
            </svg>
        );
    }
}

module.exports = CreditScene;
