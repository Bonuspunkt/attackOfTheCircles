//
// setup audio
//
const audioContext = new AudioContext();

const sfxGain = audioContext.createGain();
const musicGain = audioContext.createGain();
const mainGain = audioContext.createGain();

// FIXME: restore previously set volumes or apply sensible defaults
sfxGain.connect(mainGain);
musicGain.connect(mainGain);
mainGain.connect(audioContext.destination);


function getBufferSource(url) {
    return new Promise((resolve, reject) => {
        var request = new XMLHttpRequest();
        request.open('GET', url, true);
        request.responseType = 'arraybuffer';

        // Decode asynchronously
        request.onload = function() {
            var start = Date.now();
            audioContext.decodeAudioData(request.response, function(buffer) {

                console.log(url, Date.now() - start);

                var bufferSource = audioContext.createBufferSource();
                bufferSource.buffer = buffer;
                resolve(bufferSource);
            }, reject);
        };
        request.send();
    });
}


var tracks = [
    //'tracks/cdk_-_Carosone_-_The_Gigolo_Song_(cdk_Remix).mp3',
    'tracks/onlymeith_-_1033.mp3',
    //'tracks/F_Fact_-_Amigos.mp3',
    'tracks/grapes_-_I_dunno.mp3'
];

let backgroundMusic;
Promise.all(tracks.map(getBufferSource)).then(function(nodes) {
    nodes.forEach(node => node.connect(musicGain));
    backgroundMusic = nodes;
}).then(function() {
    let intro = backgroundMusic[0];
    intro.loop = true;
    intro.start(0);
});



const Game = require('./Game');

new Game().start();
