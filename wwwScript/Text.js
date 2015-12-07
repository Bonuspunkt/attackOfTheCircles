const React = require('react');
const {g, path} = React.DOM;

const DEFAULT_WIDTH = 768;

//
// Font: KenPixel Blocks
// by
//  Twitter:   @KenneyWings
//  Facebook:  facebook.com/KenneyNL
//  Website:   www.kenney.nl
const chars = {
    ' ': {
        width: 256,
        path: null
    },
    '!': {
        width: 512,
        path: <path d="M256 128v128h-128v-128h128zM256 384v384h-128v-384h128zM0 0v896h384v-896h-384z"/>
    },
    '\u0022': {
        width: DEFAULT_WIDTH,
        path: <path d="M256 512v256h-128v-256h128zM512 512v256h-128v-256h128zM0 384v512h640v-512h-640z"/>
    },
    '#': {
        width: 1024,
        path: <path d="M384 384v128h128v-128h-128zM640 128v128h128v128h-128v128h128v128h-128v128h-128v-128h-128v128h-128v-128h-128v-128h128v-128h-128v-128h128v-128h128v128h128v-128h128zM128 0v128h-128v640h128v128h640v-128h128v-640h-128v-128h-640z"/>
    },
    '$': {
        width: DEFAULT_WIDTH,
        path: <path d="M384 0v128h128v384h-256v128h256v128h-128v128h-128v-128h-128v-384h256v-128h-256v-128h128v-128h128zM128 -128v128h-128v896h128v128h384v-128h128v-896h-128v-128h-384z"/>
    },
    '%': {
        width: 1024,
        path: <path d="M768 128v128h-128v-128h128zM256 640v128h-128v-128h128zM256 128v128h128v128h128v128h128v128h128v128h-128v-128h-128v-128h-128v-128h-128v-128h-128v-128h128zM0 0v384h128v128h-128v384h384v-128h128v128h384v-384h-128v-128h128v-384h-384v128h-128v-128h-384z"/>
    },
    '\u0026': {
        width: DEFAULT_WIDTH,
        path: <path d="M384 128v128h128v128h-256v128h256v128h-128v128h-128v-128h-128v-384h128v-128h128zM128 0v128h-128v640h128v128h384v-128h128v-640h-128v-128h-384z"/>
    },
    '\'': {
        width: 512,
        path: <path d="M256 512v256h-128v-256h128zM0 384v512h384v-512h-384z"/>
    },
    '(': {
        width: 640,
        path: <path d="M384 128v128h-128v384h128v128h-128v-128h-128v-384h128v-128h128zM128 0v128h-128v640h128v128h384v-384h-128v-128h128v-384h-384z"/>
    },
    ')': {
        width: 640,
        path: <path d="M256 128v128h128v384h-128v128h-128v-128h128v-384h-128v-128h128zM0 0v384h128v128h-128v384h384v-128h128v-640h-128v-128h-384z"/>
    },
    '*': {
        width: DEFAULT_WIDTH,
        path: <path d="M384 384v128h128v128h-128v128h-128v-128h-128v-128h128v-128h128zM128 256v128h-128v384h128v128h384v-128h128v-384h-128v-128h-384z"/>
    },
    '+': {
        width: DEFAULT_WIDTH,
        path: <path d="M384 256v128h128v128h-128v128h-128v-128h-128v-128h128v-128h128zM128 128v128h-128v384h128v128h384v-128h128v-384h-128v-128h-384z"/>
    },
    ',': {
        width: 512,
        path: <path d="M256 0v256h-128v-256h128zM0 -128v512h384v-512h-384z"/>
    },
    '-': {
        width: DEFAULT_WIDTH,
        path: <path d="M512 384v128h-384v-128h384zM0 256v384h640v-384h-640z"/>
    },
    '.': {
        width: 512,
        path: <path d="M256 128v128h-128v-128h128zM0 0v384h384v-384h-384z"/>
    },
    '/': {
        width: 1024,
        path: <path d="M0 0v256h128v-128h128v-128h-256zM256 128v128h128v-128h-128zM128 256v128h128v-128h-128zM384 256v128h128v-128h-128zM256 384v128h128v-128h-128zM512 384v128h128v-128h-128zM384 512v128h128v-128h-128zM640 512v128h128v-128h-128zM512 640v128h128v-128h-128z M768 640v128h-128v128h256v-256h-128z"/>
    },
    '0': {
        width: DEFAULT_WIDTH,
        path: <path d="M256 256v384h128v-384h-128zM512 128v640h-384v-640h384zM0 0v896h640v-896h-640z"/>
    },
    '1': {
        width: DEFAULT_WIDTH,
        path: <path d="M512 128v128h-128v512h-256v-128h128v-384h-128v-128h384zM0 0v384h128v128h-128v384h512v-512h128v-384h-640z"/>
    },
    '2': {
        width: DEFAULT_WIDTH,
        path: <path d="M512 128v128h-256v128h256v384h-384v-128h256v-128h-256v-384h384zM0 0v896h640v-896h-640z"/>
    },
    '3': {
        width: DEFAULT_WIDTH,
        path: <path d="M512 128v640h-384v-128h256v-128h-256v-128h256v-128h-256v-128h384zM0 0v896h640v-896h-640z"/>
    },
    '4': {
        width: DEFAULT_WIDTH,
        path: <path d="M512 128v640h-128v-256h-128v256h-128v-384h256v-256h128zM256 0v256h-256v640h640v-896h-384z"/>
    },
    '5': {
        width: DEFAULT_WIDTH,
        path: <path d="M512 128v384h-256v128h256v128h-384v-384h256v-128h-256v-128h384zM0 0v896h640v-896h-640z"/>
    },
    '6': {
        width: DEFAULT_WIDTH,
        path: <path d="M256 256v128h128v-128h-128zM512 128v384h-256v256h-128v-640h384zM0 0v896h384v-256h256v-640h-640z"/>
    },
    '7': {
        width: DEFAULT_WIDTH,
        path: <path d="M512 128v640h-384v-128h256v-512h128zM256 0v512h-256v384h640v-896h-384z"/>
    },
    '8': {
        width: DEFAULT_WIDTH,
        path: <path d="M256 256v128h128v-128h-128zM256 512v128h128v-128h-128zM512 128v640h-384v-640h384zM0 0v896h640v-896h-640z"/>
    },
    '9': {
        width: DEFAULT_WIDTH,
        path: <path d="M256 512v128h128v-128h-128zM512 128v640h-384v-384h256v-256h128zM256 0v256h-256v640h640v-896h-384z"/>
    },
    ':': {
        width: 512,
        path: <path d="M256 128v128h-128v-128h128zM0 0v384h384v-384h-384zM256 640v128h-128v-128h128zM0 512v384h384v-384h-384z"/>
    },
    ';': {
        width: 512,
        path: <path d="M256 0v256h-128v-256h128zM0 -128v512h384v-512h-384zM256 640v128h-128v-128h128zM0 512v384h384v-384h-384z"/>
    },
    '\u003c': {
        width: 640,
        path: <path d="M128 128v128h128v-128h-128zM256 0v128h128v128h128v-256h-256zM0 256v128h128v-128h-128zM256 256v128h128v-128h-128zM128 384v128h128v-128h-128zM384 384v128h-128v128h256v-256h-128z"/>
    },
    '=': {
        width: DEFAULT_WIDTH,
        path: <path d="M512 256v128h-384v-128h384zM512 512v128h-384v-128h384zM0 128v640h640v-640h-640z"/>
    },
    '\u003e': {
        width: 640,
        path: <path d="M0 0v256h128v-128h128v-128h-256zM256 128v128h128v-128h-128zM128 256v128h128v-128h-128zM384 256v128h128v-128h-128zM256 384v128h128v-128h-128zM0 384v256h256v-128h-128v-128h-128z"/>
    },
    '?': {
        width: DEFAULT_WIDTH,
        path: <path d="M384 128v128h-128v-128h128zM384 384v128h128v256h-384v-128h256v-128h-128v-128h128zM128 0v512h-128v384h640v-512h-128v-384h-384z"/>
    },
    '@': {
        width: DEFAULT_WIDTH,
        path: <path d="M512 128v128h-256v384h128v-256h128v384h-384v-640h384zM0 0v896h640v-896h-640z"/>
    },
    'A': {
        width: DEFAULT_WIDTH,
        path: <path d="M256 512v128h128v-128h-128zM512 128v640h-384v-640h128v256h128v-256h128zM0 0v896h640v-896h-640z"/>
    },
    'B': {
        width: DEFAULT_WIDTH,
        path: <path d="M256 256v128h128v-128h-128zM256 512v128h128v-128h-128zM512 128v256h-128v128h128v256h-384v-640h384zM0 0v896h640v-896h-640z"/>
    },
    'C': {
        width: DEFAULT_WIDTH,
        path: <path d="M512 128v128h-256v384h256v128h-384v-640h384zM0 0v896h640v-384h-256v-128h256v-384h-640z"/>
    },
    'D': {
        width: DEFAULT_WIDTH,
        path: <path d="M256 256v384h128v-384h-128zM384 128v128h128v384h-128v128h-256v-640h256zM0 0v896h512v-128h128v-640h-128v-128h-512z"/>
    },
    'E': {
        width: DEFAULT_WIDTH,
        path: <path d="M512 128v128h-256v128h256v128h-256v128h256v128h-384v-640h384zM0 0v896h640v-896h-640z"/>
    },
    'F': {
        width: DEFAULT_WIDTH,
        path: <path d="M256 128v256h256v128h-256v128h256v128h-384v-640h128zM0 0v896h640v-640h-256v-256h-384z"/>
    },
    'G': {
        width: DEFAULT_WIDTH,
        path: <path d="M512 128v384h-128v-256h-128v384h256v128h-384v-640h384zM0 0v896h640v-896h-640z"/>
    },
    'H': {
        width: DEFAULT_WIDTH,
        path: <path d="M512 128v640h-128v-256h-128v256h-128v-640h128v256h128v-256h128zM0 0v896h640v-896h-640z"/>
    },
    'I': {
        width: DEFAULT_WIDTH,
        path: <path d="M512 128v128h-128v384h128v128h-384v-128h128v-384h-128v-128h384zM0 0v384h128v128h-128v384h640v-384h-128v-128h128v-384h-640z"/>
    },
    'J': {
        width: DEFAULT_WIDTH,
        path: <path d="M384 128v128h128v512h-384v-128h256v-384h-256v-128h256zM0 0v384h256v128h-256v384h640v-768h-128v-128h-512z"/>
    },
    'K': {
        width: DEFAULT_WIDTH,
        path: <path d="M512 128v256h-128v128h128v256h-128v-256h-128v256h-128v-640h128v256h128v-256h128zM0 0v896h640v-896h-640z"/>
    },
    'L': {
        width: DEFAULT_WIDTH,
        path: <path d="M512 128v128h-256v512h-128v-640h384zM0 0v896h384v-512h256v-384h-640z"/>
    },
    'M': {
        width: 1024,
        path: <path d="M768 128v512h-128v128h-512v-640h128v512h128v-512h128v512h128v-512h128zM0 0v896h768v-128h128v-768h-896z"/>
    },
    'N': {
        width: DEFAULT_WIDTH,
        path: <path d="M512 128v512h-128v128h-256v-640h128v512h128v-512h128zM0 0v896h512v-128h128v-768h-640z"/>
    },
    'O': {
        width: DEFAULT_WIDTH,
        path: <path d="M256 256v384h128v-384h-128zM512 128v640h-384v-640h384zM0 0v896h640v-896h-640z"/>
    },
    'P': {
        width: DEFAULT_WIDTH,
        path: <path d="M256 512v128h128v-128h-128zM256 128v256h256v384h-384v-640h128zM0 0v896h640v-640h-256v-256h-384z"/>
    },
    'Q': {
        width: DEFAULT_WIDTH,
        path: <path d="M256 256v384h128v-384h-128zM384 0v128h128v640h-384v-640h128v-128h128zM128 -128v128h-128v896h640v-896h-128v-128h-384z"/>
    },
    'R': {
        width: DEFAULT_WIDTH,
        path: <path d="M256 512v128h128v-128h-128zM512 128v256h-128v128h128v256h-384v-640h128v256h128v-256h128zM0 0v896h640v-896h-640z"/>
    },
    'S': {
        width: DEFAULT_WIDTH,
        path: <path d="M512 128v384h-256v128h256v128h-384v-384h256v-128h-256v-128h384zM0 0v896h640v-896h-640z"/>
    },
    'T': {
        width: DEFAULT_WIDTH,
        path: <path d="M384 128v512h128v128h-384v-128h128v-512h128zM128 0v512h-128v384h640v-384h-128v-512h-384z"/>
    },
    'U': {
        width: DEFAULT_WIDTH,
        path: <path d="M512 128v640h-128v-512h-128v512h-128v-640h384zM0 0v896h640v-896h-640z"/>
    },
    'V': {
        width: DEFAULT_WIDTH,
        path: <path d="M384 128v128h128v512h-128v-512h-128v512h-128v-512h128v-128h128zM128 0v128h-128v768h640v-768h-128v-128h-384z"/>
    },
    'W': {
        width: 1024,
        path: <path d="M640 128v128h128v512h-128v-512h-128v512h-128v-512h-128v512h-128v-640h512zM0 0v896h896v-768h-128v-128h-768z"/>
    },
    'X': {
        width: DEFAULT_WIDTH,
        path: <path d="M512 128v256h-128v128h128v256h-128v-256h-128v256h-128v-256h128v-128h-128v-256h128v256h128v-256h128zM0 0v896h640v-896h-640z"/>
    },
    'Y': {
        width: DEFAULT_WIDTH,
        path: <path d="M384 128v256h128v384h-128v-256h-128v256h-128v-384h128v-256h128zM128 0v256h-128v640h640v-640h-128v-256h-384z"/>
    },
    'Z': {
        width: DEFAULT_WIDTH,
        path: <path d="M512 128v128h-256v128h256v384h-384v-128h256v-128h-256v-384h384zM0 0v896h640v-896h-640z"/>
    },
    '[': {
        width: 640,
        path: <path d="M384 128v128h-128v384h128v128h-256v-640h256zM0 0v896h512v-384h-128v-128h128v-384h-512z"/>
    },
    '\\': {
        width: 1024,
        path: <path d="M512 128v128h128v-128h-128zM640 0v128h128v128h128v-256h-256zM384 256v128h128v-128h-128zM640 256v128h128v-128h-128zM256 384v128h128v-128h-128zM512 384v128h128v-128h-128zM128 512v128h128v-128h-128zM384 512v128h128v-128h-128zM256 640v128h128v-128h-128z M0 640v256h256v-128h-128v-128h-128z" />
    },
    ']': {
        width: 640,
        path: <path d="M384 128v640h-256v-128h128v-384h-128v-128h256zM0 0v384h128v128h-128v384h512v-896h-512z"/>
    },
    '^': {
        width: DEFAULT_WIDTH,
        path: <path d="M0 384v256h128v-128h128v-128h-256zM256 512v128h128v-128h-128zM384 384v128h128v128h128v-256h-256zM128 640v128h128v-128h-128zM384 640v128h128v-128h-128zM256 768v128h128v-128h-128z"/>
    },
    '_': {
        width: DEFAULT_WIDTH,
        path: <path d="M512 128v128h-384v-128h384zM0 0v384h640v-384h-640z"/>
    },
    '`': {
        width: 512,
        path: <path d="M256 512v256h-128v-256h128zM0 384v512h384v-512h-384z"/>
    },
    'a': {
        width: DEFAULT_WIDTH,
        path: <path d="M256 512v128h128v-128h-128zM512 128v640h-384v-640h128v256h128v-256h128zM0 0v896h640v-896h-640z"/>
    },
    'b': {
        width: DEFAULT_WIDTH,
        path: <path d="M256 256v128h128v-128h-128zM256 512v128h128v-128h-128zM512 128v256h-128v128h128v256h-384v-640h384zM0 0v896h640v-896h-640z"/>
    },
    'c': {
        width: DEFAULT_WIDTH,
        path: <path d="M512 128v128h-256v384h256v128h-384v-640h384zM0 0v896h640v-384h-256v-128h256v-384h-640z"/>
    },
    'd': {
        width: DEFAULT_WIDTH,
        path: <path d="M256 256v384h128v-384h-128zM384 128v128h128v384h-128v128h-256v-640h256zM0 0v896h512v-128h128v-640h-128v-128h-512z"/>
    },
    'e': {
        width: DEFAULT_WIDTH,
        path: <path d="M512 128v128h-256v128h256v128h-256v128h256v128h-384v-640h384zM0 0v896h640v-896h-640z"/>
    },
    'f': {
        width: DEFAULT_WIDTH,
        path: <path d="M256 128v256h256v128h-256v128h256v128h-384v-640h128zM0 0v896h640v-640h-256v-256h-384z"/>
    },
    'g': {
        width: DEFAULT_WIDTH,
        path: <path d="M512 128v384h-128v-256h-128v384h256v128h-384v-640h384zM0 0v896h640v-896h-640z"/>
    },
    'h': {
        width: DEFAULT_WIDTH,
        path: <path d="M512 128v640h-128v-256h-128v256h-128v-640h128v256h128v-256h128zM0 0v896h640v-896h-640z"/>
    },
    'i': {
        width: DEFAULT_WIDTH,
        path: <path d="M512 128v128h-128v384h128v128h-384v-128h128v-384h-128v-128h384zM0 0v384h128v128h-128v384h640v-384h-128v-128h128v-384h-640z"/>
    },
    'j': {
        width: DEFAULT_WIDTH,
        path: <path d="M384 128v128h128v512h-384v-128h256v-384h-256v-128h256zM0 0v384h256v128h-256v384h640v-768h-128v-128h-512z"/>
    },
    'k': {
        width: DEFAULT_WIDTH,
        path: <path d="M512 128v256h-128v128h128v256h-128v-256h-128v256h-128v-640h128v256h128v-256h128zM0 0v896h640v-896h-640z"/>
    },
    'l': {
        width: DEFAULT_WIDTH,
        path: <path d="M512 128v128h-256v512h-128v-640h384zM0 0v896h384v-512h256v-384h-640z"/>
    },
    'm': {
        width: 1024,
        path: <path d="M768 128v512h-128v128h-512v-640h128v512h128v-512h128v512h128v-512h128zM0 0v896h768v-128h128v-768h-896z"/>
    },
    'n': {
        width: DEFAULT_WIDTH,
        path: <path d="M512 128v512h-128v128h-256v-640h128v512h128v-512h128zM0 0v896h512v-128h128v-768h-640z"/>
    },
    'o': {
        width: DEFAULT_WIDTH,
        path: <path d="M256 256v384h128v-384h-128zM512 128v640h-384v-640h384zM0 0v896h640v-896h-640z"/>
    },
    'p': {
        width: DEFAULT_WIDTH,
        path: <path d="M256 512v128h128v-128h-128zM256 128v256h256v384h-384v-640h128zM0 0v896h640v-640h-256v-256h-384z"/>
    },
    'q': {
        width: DEFAULT_WIDTH,
        path: <path d="M256 256v384h128v-384h-128zM384 0v128h128v640h-384v-640h128v-128h128zM128 -128v128h-128v896h640v-896h-128v-128h-384z"/>
    },
    'r': {
        width: DEFAULT_WIDTH,
        path: <path d="M256 512v128h128v-128h-128zM512 128v256h-128v128h128v256h-384v-640h128v256h128v-256h128zM0 0v896h640v-896h-640z"/>
    },
    's': {
        width: DEFAULT_WIDTH,
        path: <path d="M512 128v384h-256v128h256v128h-384v-384h256v-128h-256v-128h384zM0 0v896h640v-896h-640z"/>
    },
    't': {
        width: DEFAULT_WIDTH,
        path: <path d="M384 128v512h128v128h-384v-128h128v-512h128zM128 0v512h-128v384h640v-384h-128v-512h-384z"/>
    },
    'u': {
        width: DEFAULT_WIDTH,
        path: <path d="M512 128v640h-128v-512h-128v512h-128v-640h384zM0 0v896h640v-896h-640z"/>
    },
    'v': {
        width: DEFAULT_WIDTH,
        path: <path d="M384 128v128h128v512h-128v-512h-128v512h-128v-512h128v-128h128zM128 0v128h-128v768h640v-768h-128v-128h-384z"/>
    },
    'w': {
        width: 1024,
        path: <path d="M640 128v128h128v512h-128v-512h-128v512h-128v-512h-128v512h-128v-640h512zM0 0v896h896v-768h-128v-128h-768z"/>
    },
    'x': {
        width: DEFAULT_WIDTH,
        path: <path d="M512 128v256h-128v128h128v256h-128v-256h-128v256h-128v-256h128v-128h-128v-256h128v256h128v-256h128zM0 0v896h640v-896h-640z"/>
    },
    'y': {
        width: DEFAULT_WIDTH,
        path: <path d="M384 128v256h128v384h-128v-256h-128v256h-128v-384h128v-256h128zM128 0v256h-128v640h640v-640h-128v-256h-384z"/>
    },
    'z': {
        width: DEFAULT_WIDTH,
        path: <path d="M512 128v128h-256v128h256v384h-384v-128h256v-128h-256v-384h384zM0 0v896h640v-896h-640z"/>
    },
    '{': {
        width: DEFAULT_WIDTH,
        path: <path d="M512 128v128h-128v384h128v128h-256v-256h-128v-128h128v-256h256zM128 0v256h-128v384h128v256h512v-384h-128v-128h128v-384h-512z"/>
    },
    '|': {
        width: 512,
        path: <path d="M256 128v640h-128v-640h128zM0 0v896h384v-896h-384z"/>
    },
    '}': {
        width: DEFAULT_WIDTH,
        path: <path d="M384 128v256h128v128h-128v256h-256v-128h128v-384h-128v-128h256zM0 0v384h128v128h-128v384h512v-256h128v-384h-128v-256h-512z"/>
    },
    '~': {
        width: 1152,
        path: <path d="M768 256v128h128v128h-128v-128h-256v128h-256v-128h-128v-128h128v128h256v-128h256zM0 128v384h128v128h896v-384h-128v-128h-896z"/>
    },
    '\u00a1': {
        width: 512,
        path: <path d="M256 128v384h-128v-384h128zM256 640v128h-128v-128h128zM0 0v896h384v-896h-384z"/>
    },
    '\u00a2': {
        width: DEFAULT_WIDTH,
        path: <path d="M384 128v128h128v128h-256v128h256v128h-128v128h-128v-128h-128v-384h128v-128h128zM128 0v128h-128v640h128v128h384v-128h128v-640h-128v-128h-384z"/>
    },
    '\u00a3': {
        width: 896,
        path: <path d="M640 128v128h-256v128h128v128h-128v128h256v128h-256v-128h-128v-128h-128v-128h128v-256h384zM128 0v256h-128v384h128v128h128v128h512v-384h-128v-128h128v-384h-640z"/>
    },
    '\u00a4': {
        width: 1024,
        path: <path d="M384 384v128h128v-128h-128zM768 128v128h-128v384h128v128h-128v-128h-384v128h-128v-128h128v-384h-128v-128h128v128h384v-128h128zM0 0v384h128v128h-128v384h384v-128h128v128h384v-384h-128v-128h128v-384h-384v128h-128v-128h-384z"/>
    },
    '\u00a5': {
        width: DEFAULT_WIDTH,
        path: <path d="M384 128v128h128v128h-128v128h128v256h-128v-128h-128v128h-128v-256h128v-128h-128v-128h128v-128h128zM128 0v128h-128v768h640v-768h-128v-128h-384z"/>
    },
    '\u00a6': {
        width: 512,
        path: <path d="M256 128v256h-128v-256h128zM256 512v256h-128v-256h128zM0 0v896h384v-896h-384z"/>
    },
    '\u00a7': {
        width: DEFAULT_WIDTH,
        path: <path d="M384 128v128h128v128h-128v128h-128v128h256v128h-256v-128h-128v-128h128v-128h128v-128h-256v-128h256zM0 0v768h128v128h512v-768h-128v-128h-512z"/>
    },
    '\u00a8': {
        width: DEFAULT_WIDTH,
        path: <path d="M256 640v128h-128v-128h128zM512 640v128h-128v-128h128zM0 512v384h640v-384h-640z"/>
    },
    '\u00a9': {
        width: DEFAULT_WIDTH,
        path: <path d="M128 128v128h384v-128h-384zM0 256v384h128v-384h-128zM512 256v128h-256v128h256v128h128v-384h-128zM128 640v128h384v-128h-384z"/>
    },
    '\u00aa': {
        width: 640,
        path: <path d="M384 384v384h-256v-128h128v-128h-128v-128h256zM0 256v640h512v-640h-512z"/>
    },
    '\u00ab': {
        width: 1152,
        path: <path d="M512 128v128h-128v128h-128v128h128v128h128v128h-128v-128h-128v-128h-128v-128h128v-128h128v-128h128zM896 128v128h-128v128h-128v128h128v128h128v128h-128v-128h-128v-128h-128v-128h128v-128h128v-128h128zM256 0v128h-128v128h-128v384h128v128h128v128h768v-384 h-128v-128h128v-384h-768z"/>
    },
    '\u00ac': {
        width: DEFAULT_WIDTH,
        path: <path d="M512 256v256h-384v-128h256v-128h128zM256 128v128h-256v384h640v-512h-384z"/>
    },
    '\u00ad': {
        width: DEFAULT_WIDTH,
        path: <path d="M512 384v128h-384v-128h384zM0 256v384h640v-384h-640z"/>
    },
    '\u00ae': {
        width: DEFAULT_WIDTH,
        path: <path d="M0 256v384h128v-384h-128zM128 128v128h128v256h256v128h128v-384h-128v-128h-384zM128 640v128h384v-128h-384z"/>
    },
    '\u00af': {
        width: DEFAULT_WIDTH,
        path: <path d="M512 640v128h-384v-128h384zM0 512v384h640v-384h-640z"/>
    },
    '\u00b0': {
        width: 512,
        path: <path d="M256 640v128h-128v-128h128zM0 512v384h384v-384h-384z"/>
    },
    '\u00b1': {
        width: DEFAULT_WIDTH,
        path: <path d="M512 128v128h-384v-128h384zM384 384v128h128v128h-128v128h-128v-128h-128v-128h128v-128h128zM0 0v768h128v128h384v-128h128v-768h-640z"/>
    },
    '\u00b2': {
        width: 640,
        path: <path d="M384 256v512h-256v-128h128v-384h128zM128 128v384h-128v384h512v-768h-384z"/>
    },
    '\u00b3': {
        width: 640,
        path: <path d="M384 256v128h-128v128h128v256h-256v-128h128v-128h-128v-256h256zM0 128v768h512v-768h-512z"/>
    },
    '\u00b4': {
        width: 640,
        path: <path d="M384 640v128h-256v-128h256zM0 512v384h512v-384h-512z"/>
    },
    '\u00b5': {
        width: DEFAULT_WIDTH,
        path: <path d="M256 128v256h128v128h128v256h-128v-256h-128v256h-128v-640h128zM0 0v896h640v-512h-128v-128h-128v-256h-384z"/>
    },
    '\u00b6': {
        width: 896,
        path: <path d="M640 128v640h-512v-256h128v-384h128v512h128v-512h128zM128 0v384h-128v512h768v-896h-640z"/>
    },
    '\u00b7': {
        width: 512,
        path: <path d="M256 384v128h-128v-128h128zM0 256v384h384v-384h-384z"/>
    },
    '\u00b8': {
        width: 512,
        path: <path d="M256 -128v256h-128v-256h128zM0 -256v512h384v-512h-384z"/>
    },
    '\u00b9': {
        width: 640,
        path: <path d="M384 384v384h-256v-128h128v-256h128zM128 256v256h-128v384h512v-640h-384z"/>
    },
    '\u00ba': {
        width: 512,
        path: <path d="M256 640v128h-128v-128h128zM0 512v384h384v-384h-384z"/>
    },
    '\u00bb': {
        width: 1152,
        path: <path d="M256 128v128h128v128h128v128h-128v128h-128v128h-128v-128h128v-128h128v-128h-128v-128h-128v-128h128zM640 128v128h128v128h128v128h-128v128h-128v128h-128v-128h128v-128h128v-128h-128v-128h-128v-128h128zM0 0v384h128v128h-128v384h768v-128h128v-128h128v-384 h-128v-128h-128v-128h-768z"/>
    },
    '\u00bc': {
        width: 896,
        path: <path d="M0 0v128h128v-128h-128zM128 128v128h128v-128h-128zM640 0v128h-256v256h128v-128h128v128h128v-384h-128zM512 512v128h128v-128h-128zM128 384v256h-128v128h256v-384h-128zM640 640v128h128v-128h-128z"/>
    },
    '\u00bd': {
        width: 896,
        path: <path d="M0 0v128h128v-128h-128zM128 128v128h128v-128h-128zM512 0v256h-128v128h256v-256h128v-128h-256zM512 512v128h128v-128h-128zM128 384v256h-128v128h256v-384h-128zM640 640v128h128v-128h-128z"/>
    },
    '\u00be': {
        width: 896,
        path: <path d="M0 0v128h128v-128h-128zM128 128v128h128v-128h-128zM640 0v128h-256v256h128v-128h128v128h128v-384h-128zM512 512v128h128v-128h-128zM0 384v128h128v128h-128v128h384v-384h-384zM640 640v128h128v-128h-128z"/>
    },
    '\u00bf': {
        width: DEFAULT_WIDTH,
        path: <path d="M512 128v128h-256v128h128v128h-128v-128h-128v-256h384zM384 640v128h-128v-128h128zM0 0v512h128v384h384v-512h128v-384h-640z"/>
    },
    '\u00c0': {
        width: DEFAULT_WIDTH,
        path: <path d="M256 512v128h128v-128h-128zM512 128v640h-384v-640h128v256h128v-256h128zM384 896v128h-256v-128h256zM0 0v1152h512v-256h128v-896h-640z"/>
    },
    '\u00c1': {
        width: DEFAULT_WIDTH,
        path: <path d="M256 512v128h128v-128h-128zM512 128v640h-384v-640h128v256h128v-256h128zM512 896v128h-256v-128h256zM0 0v896h128v256h512v-1152h-640z"/>
    },
    '\u00c2': {
        width: DEFAULT_WIDTH,
        path: <path d="M256 512v128h128v-128h-128zM512 128v640h-384v-640h128v256h128v-256h128zM512 896v128h-128v128h-128v-128h-128v-128h128v128h128v-128h128zM0 0v1152h128v128h384v-128h128v-1152h-640z"/>
    },
    '\u00c3': {
        width: DEFAULT_WIDTH,
        path: <path d="M256 512v128h128v-128h-128zM512 128v640h-384v-640h128v256h128v-256h128zM512 896v128h-384v-128h384zM0 0v1152h640v-1152h-640z"/>
    },
    '\u00c4': {
        width: DEFAULT_WIDTH,
        path: <path d="M256 512v128h128v-128h-128zM512 128v640h-384v-640h128v256h128v-256h128zM256 896v128h-128v-128h128zM512 896v128h-128v-128h128zM0 0v1152h640v-1152h-640z"/>
    },
    '\u00c5': {
        width: DEFAULT_WIDTH,
        path: <path d="M256 512v128h128v-128h-128zM512 128v640h-384v-640h128v256h128v-256h128zM384 896v128h-128v-128h128zM0 0v896h128v256h384v-256h128v-896h-640z"/>
    },
    '\u00c6': {
        width: 1024,
        path: <path d="M256 512v128h128v-128h-128zM768 128v128h-256v128h256v128h-256v128h256v128h-640v-640h128v256h128v-256h384zM0 0v896h896v-896h-896z"/>
    },
    '\u00c7': {
        width: DEFAULT_WIDTH,
        path: <path d="M384 0v128h128v128h-256v384h256v128h-384v-640h128v-128h128zM128 -128v128h-128v896h640v-384h-256v-128h256v-384h-128v-128h-384z"/>
    },
    '\u00c8': {
        width: DEFAULT_WIDTH,
        path: <path d="M512 128v128h-256v128h256v128h-256v128h256v128h-384v-640h384zM384 896v128h-256v-128h256zM0 0v1152h512v-256h128v-896h-640z"/>
    },
    '\u00c9': {
        width: DEFAULT_WIDTH,
        path: <path d="M512 128v128h-256v128h256v128h-256v128h256v128h-384v-640h384zM512 896v128h-256v-128h256zM0 0v896h128v256h512v-1152h-640z"/>
    },
    '\u00ca': {
        width: DEFAULT_WIDTH,
        path: <path d="M512 128v128h-256v128h256v128h-256v128h256v128h-384v-640h384zM512 896v128h-128v128h-128v-128h-128v-128h128v128h128v-128h128zM0 0v1152h128v128h384v-128h128v-1152h-640z"/>
    },
    '\u00cb': {
        width: DEFAULT_WIDTH,
        path: <path d="M512 128v128h-256v128h256v128h-256v128h256v128h-384v-640h384zM256 896v128h-128v-128h128zM512 896v128h-128v-128h128zM0 0v1152h640v-1152h-640z"/>
    },
    '\u00cc': {
        width: DEFAULT_WIDTH,
        path: <path d="M512 128v128h-128v384h128v128h-384v-128h128v-384h-128v-128h384zM384 896v128h-256v-128h256zM0 0v384h128v128h-128v640h512v-256h128v-384h-128v-128h128v-384h-640z"/>
    },
    '\u00cd': {
        width: DEFAULT_WIDTH,
        path: <path d="M512 128v128h-128v384h128v128h-384v-128h128v-384h-128v-128h384zM512 896v128h-256v-128h256zM0 0v384h128v128h-128v384h128v256h512v-640h-128v-128h128v-384h-640z"/>
    },
    '\u00ce': {
        width: DEFAULT_WIDTH,
        path: <path d="M512 128v128h-128v384h128v128h-384v-128h128v-384h-128v-128h384zM512 896v128h-128v128h-128v-128h-128v-128h128v128h128v-128h128zM0 0v384h128v128h-128v640h128v128h384v-128h128v-640h-128v-128h128v-384h-640z"/>
    },
    '\u00cf': {
        width: DEFAULT_WIDTH,
        path: <path d="M512 128v128h-128v384h128v128h-384v-128h128v-384h-128v-128h384zM256 896v128h-128v-128h128zM512 896v128h-128v-128h128zM0 0v384h128v128h-128v640h640v-640h-128v-128h128v-384h-640z"/>
    },
    '\u00d0': {
        width: 896,
        path: <path d="M384 256v384h128v-384h-128zM512 128v128h128v384h-128v128h-256v-256h-128v-128h128v-256h256zM128 0v256h-128v384h128v256h512v-128h128v-640h-128v-128h-512z"/>
    },
    '\u00d1': {
        width: DEFAULT_WIDTH,
        path: <path d="M512 128v512h-128v128h-256v-640h128v512h128v-512h128zM512 896v128h-384v-128h384zM0 0v1152h640v-1152h-640z"/>
    },
    '\u00d2': {
        width: DEFAULT_WIDTH,
        path: <path d="M256 256v384h128v-384h-128zM512 128v640h-384v-640h384zM384 896v128h-256v-128h256zM0 0v1152h512v-256h128v-896h-640z"/>
    },
    '\u00d3': {
        width: DEFAULT_WIDTH,
        path: <path d="M256 256v384h128v-384h-128zM512 128v640h-384v-640h384zM512 896v128h-256v-128h256zM0 0v896h128v256h512v-1152h-640z"/>
    },
    '\u00d4': {
        width: DEFAULT_WIDTH,
        path: <path d="M256 256v384h128v-384h-128zM512 128v640h-384v-640h384zM512 896v128h-128v128h-128v-128h-128v-128h128v128h128v-128h128zM0 0v1152h128v128h384v-128h128v-1152h-640z"/>
    },
    '\u00d5': {
        width: DEFAULT_WIDTH,
        path: <path d="M256 256v384h128v-384h-128zM512 128v640h-384v-640h384zM512 896v128h-384v-128h384zM0 0v1152h640v-1152h-640z"/>
    },
    '\u00d6': {
        width: DEFAULT_WIDTH,
        path: <path d="M256 256v384h128v-384h-128zM512 128v640h-384v-640h384zM256 896v128h-128v-128h128zM512 896v128h-128v-128h128zM0 0v1152h640v-1152h-640z"/>
    },
    '\u00d7': {
        width: DEFAULT_WIDTH,
        path: <path d="M512 256v128h-128v128h128v128h-128v-128h-128v128h-128v-128h128v-128h-128v-128h128v128h128v-128h128zM0 128v640h640v-640h-640z"/>
    },
    '\u00d8': {
        width: DEFAULT_WIDTH,
        path: <path d="M256 256v384h128v-384h-128zM512 128v512h-128v128h-256v-512h128v-128h256zM128 0v128h-128v768h512v-128h128v-768h-512z"/>
    },
    '\u00d9': {
        width: DEFAULT_WIDTH,
        path: <path d="M512 128v640h-128v-512h-128v512h-128v-640h384zM384 896v128h-256v-128h256zM0 0v1152h512v-256h128v-896h-640z"/>
    },
    '\u00da': {
        width: DEFAULT_WIDTH,
        path: <path d="M512 128v640h-128v-512h-128v512h-128v-640h384zM512 896v128h-256v-128h256zM0 0v896h128v256h512v-1152h-640z"/>
    },
    '\u00db': {
        width: DEFAULT_WIDTH,
        path: <path d="M512 128v640h-128v-512h-128v512h-128v-640h384zM512 896v128h-128v128h-128v-128h-128v-128h128v128h128v-128h128zM0 0v1152h128v128h384v-128h128v-1152h-640z"/>
    },
    '\u00dc': {
        width: DEFAULT_WIDTH,
        path: <path d="M512 128v640h-128v-512h-128v512h-128v-640h384zM256 896v128h-128v-128h128zM512 896v128h-128v-128h128zM0 0v1152h640v-1152h-640z"/>
    },
    '\u00dd': {
        width: DEFAULT_WIDTH,
        path: <path d="M384 128v256h128v384h-128v-256h-128v256h-128v-384h128v-256h128zM512 896v128h-256v-128h256zM128 0v256h-128v640h128v256h512v-896h-128v-256h-384z"/>
    },
    '\u00de': {
        width: DEFAULT_WIDTH,
        path: <path d="M256 384v128h128v-128h-128zM256 128v128h256v384h-256v128h-128v-640h128zM0 0v896h384v-128h256v-640h-256v-128h-384z"/>
    },
    '\u00df': {
        width: 896,
        path: <path d="M512 128v128h128v128h-128v128h128v128h-128v128h-384v-640h128v512h256v-128h-128v-128h128v-128h-128v-128h128zM0 0v896h640v-128h128v-640h-128v-128h-640z"/>
    },
    '\u00e0': {
        width: DEFAULT_WIDTH,
        path: <path d="M256 512v128h128v-128h-128zM512 128v640h-384v-640h128v256h128v-256h128zM384 896v128h-256v-128h256zM0 0v1152h512v-256h128v-896h-640z"/>
    },
    '\u00e1': {
        width: DEFAULT_WIDTH,
        path: <path d="M256 512v128h128v-128h-128zM512 128v640h-384v-640h128v256h128v-256h128zM512 896v128h-256v-128h256zM0 0v896h128v256h512v-1152h-640z"/>
    },
    '\u00e2': {
        width: DEFAULT_WIDTH,
        path: <path d="M256 512v128h128v-128h-128zM512 128v640h-384v-640h128v256h128v-256h128zM512 896v128h-128v128h-128v-128h-128v-128h128v128h128v-128h128zM0 0v1152h128v128h384v-128h128v-1152h-640z"/>
    },
    '\u00e3': {
        width: DEFAULT_WIDTH,
        path: <path d="M256 512v128h128v-128h-128zM512 128v640h-384v-640h128v256h128v-256h128zM512 896v128h-384v-128h384zM0 0v1152h640v-1152h-640z"/>
    },
    '\u00e4': {
        width: DEFAULT_WIDTH,
        path: <path d="M256 512v128h128v-128h-128zM512 128v640h-384v-640h128v256h128v-256h128zM256 896v128h-128v-128h128zM512 896v128h-128v-128h128zM0 0v1152h640v-1152h-640z"/>
    },
    '\u00e5': {
        width: DEFAULT_WIDTH,
        path: <path d="M256 512v128h128v-128h-128zM512 128v640h-384v-640h128v256h128v-256h128zM384 896v128h-128v-128h128zM0 0v896h128v256h384v-256h128v-896h-640z"/>
    },
    '\u00e6': {
        width: 1024,
        path: <path d="M256 512v128h128v-128h-128zM768 128v128h-256v128h256v128h-256v128h256v128h-640v-640h128v256h128v-256h384zM0 0v896h896v-896h-896z"/>
    },
    '\u00e7': {
        width: DEFAULT_WIDTH,
        path: <path d="M384 0v128h128v128h-256v384h256v128h-384v-640h128v-128h128zM128 -128v128h-128v896h640v-384h-256v-128h256v-384h-128v-128h-384z"/>
    },
    '\u00e8': {
        width: DEFAULT_WIDTH,
        path: <path d="M512 128v128h-256v128h256v128h-256v128h256v128h-384v-640h384zM384 896v128h-256v-128h256zM0 0v1152h512v-256h128v-896h-640z"/>
    },
    '\u00e9': {
        width: DEFAULT_WIDTH,
        path: <path d="M512 128v128h-256v128h256v128h-256v128h256v128h-384v-640h384zM512 896v128h-256v-128h256zM0 0v896h128v256h512v-1152h-640z"/>
    },
    '\u00ea': {
        width: DEFAULT_WIDTH,
        path: <path d="M512 128v128h-256v128h256v128h-256v128h256v128h-384v-640h384zM512 896v128h-128v128h-128v-128h-128v-128h128v128h128v-128h128zM0 0v1152h128v128h384v-128h128v-1152h-640z"/>
    },
    '\u00eb': {
        width: DEFAULT_WIDTH,
        path: <path d="M512 128v128h-256v128h256v128h-256v128h256v128h-384v-640h384zM256 896v128h-128v-128h128zM512 896v128h-128v-128h128zM0 0v1152h640v-1152h-640z"/>
    },
    '\u00ec': {
        width: DEFAULT_WIDTH,
        path: <path d="M512 128v128h-128v384h128v128h-384v-128h128v-384h-128v-128h384zM384 896v128h-256v-128h256zM0 0v384h128v128h-128v640h512v-256h128v-384h-128v-128h128v-384h-640z"/>
    },
    '\u00ed': {
        width: DEFAULT_WIDTH,
        path: <path d="M512 128v128h-128v384h128v128h-384v-128h128v-384h-128v-128h384zM512 896v128h-256v-128h256zM0 0v384h128v128h-128v384h128v256h512v-640h-128v-128h128v-384h-640z"/>
    },
    '\u00ee': {
        width: DEFAULT_WIDTH,
        path: <path d="M512 128v128h-128v384h128v128h-384v-128h128v-384h-128v-128h384zM512 896v128h-128v128h-128v-128h-128v-128h128v128h128v-128h128zM0 0v384h128v128h-128v640h128v128h384v-128h128v-640h-128v-128h128v-384h-640z"/>
    },
    '\u00ef': {
        width: DEFAULT_WIDTH,
        path: <path d="M512 128v128h-128v384h128v128h-384v-128h128v-384h-128v-128h384zM256 896v128h-128v-128h128zM512 896v128h-128v-128h128zM0 0v384h128v128h-128v640h640v-640h-128v-128h128v-384h-640z"/>
    },
    '\u00f0': {
        width: DEFAULT_WIDTH,
        path: <path d="M256 256v128h128v-128h-128zM512 128v512h-128v128h128v128h-128v128h-128v-128h-128v-128h128v-128h128v-128h-256v-384h384zM0 0v1152h640v-1152h-640z"/>
    },
    '\u00f1': {
        width: DEFAULT_WIDTH,
        path: <path d="M512 128v512h-128v128h-256v-640h128v512h128v-512h128zM512 896v128h-384v-128h384zM0 0v1152h640v-1152h-640z"/>
    },
    '\u00f2': {
        width: DEFAULT_WIDTH,
        path: <path d="M256 256v384h128v-384h-128zM512 128v640h-384v-640h384zM384 896v128h-256v-128h256zM0 0v1152h512v-256h128v-896h-640z"/>
    },
    '\u00f3': {
        width: DEFAULT_WIDTH,
        path: <path d="M256 256v384h128v-384h-128zM512 128v640h-384v-640h384zM512 896v128h-256v-128h256zM0 0v896h128v256h512v-1152h-640z"/>
    },
    '\u00f4': {
        width: DEFAULT_WIDTH,
        path: <path d="M256 256v384h128v-384h-128zM512 128v640h-384v-640h384zM512 896v128h-128v128h-128v-128h-128v-128h128v128h128v-128h128zM0 0v1152h128v128h384v-128h128v-1152h-640z"/>
    },
    '\u00f5': {
        width: DEFAULT_WIDTH,
        path: <path d="M256 256v384h128v-384h-128zM512 128v640h-384v-640h384zM512 896v128h-384v-128h384zM0 0v1152h640v-1152h-640z"/>
    },
    '\u00f6': {
        width: DEFAULT_WIDTH,
        path: <path d="M256 256v384h128v-384h-128zM512 128v640h-384v-640h384zM256 896v128h-128v-128h128zM512 896v128h-128v-128h128zM0 0v1152h640v-1152h-640z"/>
    },
    '\u00f7': {
        width: DEFAULT_WIDTH,
        path: <path d="M384 128v128h-128v-128h128zM512 384v128h-384v-128h384zM384 640v128h-128v-128h128zM128 0v256h-128v384h128v256h384v-256h128v-384h-128v-256h-384z"/>
    },
    '\u00f8': {
        width: DEFAULT_WIDTH,
        path: <path d="M256 256v384h128v-384h-128zM512 128v512h-128v128h-256v-512h128v-128h256zM128 0v128h-128v768h512v-128h128v-768h-512z"/>
    },
    '\u00f9': {
        width: DEFAULT_WIDTH,
        path: <path d="M512 128v640h-128v-512h-128v512h-128v-640h384zM384 896v128h-256v-128h256zM0 0v1152h512v-256h128v-896h-640z"/>
    },
    '\u00fa': {
        width: DEFAULT_WIDTH,
        path: <path d="M512 128v640h-128v-512h-128v512h-128v-640h384zM512 896v128h-256v-128h256zM0 0v896h128v256h512v-1152h-640z"/>
    },
    '\u00fb': {
        width: DEFAULT_WIDTH,
        path: <path d="M512 128v640h-128v-512h-128v512h-128v-640h384zM512 896v128h-128v128h-128v-128h-128v-128h128v128h128v-128h128zM0 0v1152h128v128h384v-128h128v-1152h-640z"/>
    },
    '\u00fc': {
        width: DEFAULT_WIDTH,
        path: <path d="M512 128v640h-128v-512h-128v512h-128v-640h384zM256 896v128h-128v-128h128zM512 896v128h-128v-128h128zM0 0v1152h640v-1152h-640z"/>
    },
    '\u00fd': {
        width: DEFAULT_WIDTH,
        path: <path d="M384 128v256h128v384h-128v-256h-128v256h-128v-384h128v-256h128zM512 896v128h-256v-128h256zM128 0v256h-128v640h128v256h512v-896h-128v-256h-384z"/>
    },
    '\u00fe': {
        width: DEFAULT_WIDTH,
        path: <path d="M256 384v128h128v-128h-128zM256 128v128h256v384h-256v128h-128v-640h128zM0 0v896h384v-128h256v-640h-256v-128h-384z"/>
    },
    '\u00ff': {
        width: DEFAULT_WIDTH,
        path: <path d="M384 128v256h128v384h-128v-256h-128v256h-128v-384h128v-256h128zM256 896v128h-128v-128h128zM512 896v128h-128v-128h128zM128 0v256h-128v896h640v-896h-128v-256h-384z"/>
    },
    '\u0178': {
        width: DEFAULT_WIDTH,
        path: <path d="M384 128v256h128v384h-128v-256h-128v256h-128v-384h128v-256h128zM256 896v128h-128v-128h128zM512 896v128h-128v-128h128zM128 0v256h-128v896h640v-896h-128v-256h-384z"/>
    },
    '\u1e9e;': {
        width: 896,
        path: <path d="M512 128v128h128v128h-128v128h128v128h-128v128h-384v-640h128v512h256v-128h-128v-128h128v-128h-128v-128h128zM0 0v896h640v-128h128v-640h-128v-128h-640z"/>
    },
    '\u2014;': {
        width: 1024,
        path: <path d="M768 384v128h-640v-128h640zM0 256v384h896v-384h-896z"/>
    },
    '\u2018;': {
        width: 512,
        path: <path d="M256 512v256h-128v-256h128zM0 384v512h384v-512h-384z"/>
    },
    '\u2019;': {
        width: 512,
        path: <path d="M256 512v256h-128v-256h128zM0 384v512h384v-512h-384z"/>
    },
    '\u201a;': {
        width: 512,
        path: <path d="M256 0v256h-128v-256h128zM0 -128v512h384v-512h-384z"/>
    },
    '\u201b;': {
        width: 512,
        path: <path d="M256 512v256h-128v-256h128zM0 384v512h384v-512h-384z"/>
    },
    '\u201c;': {
        width: DEFAULT_WIDTH,
        path: <path d="M256 512v256h-128v-256h128zM512 512v256h-128v-256h128zM0 384v512h640v-512h-640z"/>
    },
    '\u201d;': {
        width: DEFAULT_WIDTH,
        path: <path d="M256 512v256h-128v-256h128zM512 512v256h-128v-256h128zM0 384v512h640v-512h-640z"/>
    },
    '\u201e;': {
        width: DEFAULT_WIDTH,
        path: <path d="M256 0v256h-128v-256h128zM512 0v256h-128v-256h128zM0 -128v512h640v-512h-640z"/>
    },
    '\u2020;': {
        width: DEFAULT_WIDTH,
        path: <path d="M384 128v384h128v128h-128v128h-128v-128h-128v-128h128v-384h128zM128 0v384h-128v384h128v128h384v-128h128v-384h-128v-384h-384z"/>
    },
    '\u2022;': {
        width: DEFAULT_WIDTH,
        path: <path d="M384 256v128h128v128h-128v128h-128v-128h-128v-128h128v-128h128zM128 128v128h-128v384h128v128h384v-128h128v-384h-128v-128h-384z"/>
    },
    '\u2026;': {
        width: 1024,
        path: <path d="M256 128v128h-128v-128h128zM512 128v128h-128v-128h128zM768 128v128h-128v-128h128zM0 0v384h896v-384h-896z"/>
    },
    '\u2039;': {
        width: DEFAULT_WIDTH,
        path: <path d="M512 128v128h-128v128h-128v128h128v128h128v128h-128v-128h-128v-128h-128v-128h128v-128h128v-128h128zM256 0v128h-128v128h-128v384h128v128h128v128h384v-384h-128v-128h128v-384h-384z"/>
    },
    '\u203a;': {
        width: DEFAULT_WIDTH,
        path: <path d="M256 128v128h128v128h128v128h-128v128h-128v128h-128v-128h128v-128h128v-128h-128v-128h-128v-128h128zM0 0v384h128v128h-128v384h384v-128h128v-128h128v-384h-128v-128h-128v-128h-384z"/>
    },
    '\u20ac;': {
        width: 896,
        path: <path d="M640 128v128h-256v128h256v128h-256v128h256v128h-256v-128h-128v-128h-128v-128h128v-128h128v-128h256zM256 0v128h-128v128h-128v384h128v128h128v128h512v-896h-512z"/>
    },
    '\u2122;': {
        width: 1152,
        path: <path d="M640 640v128h128v-128h-128zM128 640v128h-128v128h640v-128h-128v-128h-128v128h-128v-128h-128zM896 640v128h-128v128h256v-256h-128z"/>
    },
    '\ufb01;': {
        width: DEFAULT_WIDTH,
        path: <path d="M512 128v384h-256v128h-128v-512h128v256h128v-256h128zM512 640v128h-128v-128h128zM0 0v768h128v128h512v-896h-640z"/>
    },
    '\ufb02;': {
        width: DEFAULT_WIDTH,
        path: <path d="M512 128v384h-256v128h256v128h-256v-128h-128v-512h128v256h128v-256h128zM0 0v768h128v128h512v-896h-640z"/>
    },

    default: {
        width: 128,
        path: <path d="M448 127v142h-143v-142h143zM590 293v143h-285v-143h285zM448 459v143h-143v-143h143zM590 626v141h-142q-60 0 -101 -41q-42 -42 -42 -100h285zM0 0v896h896v-896h-896z"/>
    }
};


class Text extends React.Component {
    render() {

        const {x, y, fontSize, fill} = this.props;
        const scale = fontSize / 1024;

        const transform = `translate(${x} ${y}) scale(${scale} ${-scale})`;

        return (
            <g transform={ transform } fill={ fill }>
                { this.renderChars() }
            </g>
        );
    }

    renderChars() {
        let x = 0;
        return this.props.children
            .split('')
            .map(char => chars[char] || chars['default'])
            .map(char => {
                const charWrap = (
                    <g transform={ 'translate(' + x + ' 0)' }>
                        { char.path }
                    </g>
                );
                x += char.width;
                return charWrap;
            });
    }
}

Text.propTypes = {
    x: React.PropTypes.number.isRequired,
    y: React.PropTypes.number.isRequired,
    fontSize: React.PropTypes.number.isRequired,
    children: React.PropTypes.string.isRequired,
    fill: React.PropTypes.string,
    stroke: React.PropTypes.string,
    strokeWidth: React.PropTypes.number
};

module.exports = Text;
