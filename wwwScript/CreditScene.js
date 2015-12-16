const React = require('react');
const { svg } = React.DOM;
const Text = require('./Text');

const credits = [{
    type: 'title',
    name: 'MUSIC'
}, {
    name: '1033 by onlymeith',
    href: 'http://ccmixter.org/files/onlymeith/52169',
    notes: [
        '(c) 2015 Licensed under a Creative Commons Attribution Noncommercial (3.0) license.',
        'Ft: Vidian'
    ]
}, {
    name: 'Carosone - The Gigolo Song (cdk Remix) by cdk',
    href: 'http://ccmixter.org/files/cdk/52193',
    notes: [
        '(c) 2015 Licensed under a Creative Commons Attribution Noncommercial (3.0) license.',
        'Ft: Carosone'
    ]
}, {
    name: 'Amigos by Platinum Butterfly ',
    href: 'http://ccmixter.org/files/F_Fact/52032',
    notes: [
        '(c) 2015 Licensed under a Creative Commons Attribution (3.0) license.',
        'Ft: Clarence Simpson, Susan (oohs and aahs)'
    ]
}, {
    name: 'I dunno by grapes',
    href: 'http://ccmixter.org/files/grapes/16626',
    notes: [
        '(c) 2008 Licensed under a Creative Commons Attribution (3.0) license.',
        'Ft: J Lang, Morusque'
    ]
}, {
    name: 'andrew anime by urmymuse',
    href: 'http://ccmixter.org/files/urmymuse/50490',
    notes: [
        '(c) 2015 Licensed under a Creative Commons Attribution Noncommercial (3.0) license.',
        'Ft: Andrew Wainwright'
    ]
}, {
    type: 'title',
    name: 'FONTS'
}, {
    name: 'KenPixel Blocks',
    href: 'www.kenney.nl',
    notes: [
        'Creative Commons Zero, CC0',
        'modified to render as svg path'
    ]
}, {
    type: 'title',
    name: 'MORE INFOS'
}, {
    name: 'https://github.com/Bonuspunkt/attackOfTheCircles',
    href: 'https://github.com/Bonuspunkt/attackOfTheCircles'
}];

const x = 5;
let y = 0;
const creditItems = credits.map((credit, i) => {

    const result = [];
    if (credit.type === 'title') {

        y += 40;
        result.push(<Text key={ i } fontSize={ 24 } x={ x } y={ y }>{ credit.name }</Text>);
    } else {
        y += 20;
        result.push(<Text key={ i } fontSize={ 16 } x={ x } y={ y }>{ credit.name }</Text>);

        if (credit.notes) {

            credit.notes.forEach((note, j) => {
                y += 8;
                result.push(<Text key={ i + '-' + j } fontSize={ 8 } x={ x } y={ y }>{ note }</Text>);
            });
        }
    }

    return result;

}).reduce((p, v) => p.concat(v), []);


// TODO: make the items clickable
class CreditScene {

    constructor() {
        this.y = -640;
    }

    update(delta, timestamp) {
        this.y++;

        if (this.y > y + 640) {
            this.y = -640;
        }
    }

    render() {
        const transform = `translate(0 ${-this.y})`;

        return (
            <svg viewBox="0 0 640 640" preserveAspectRatio="xMidYMid meet"
                 width={ window.innerWidth } height={ window.innerHeight }>
                <rect x="0" y="0" width="640" height="640" stroke="black" strokeWidth="1" fill="transparent" />
                <g transform={ transform }>
                    { creditItems }
                </g>
            </svg>
        );
    }
}

module.exports = CreditScene;
