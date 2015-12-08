# Dev Log

## 2015-12-08
lots of minor stuff, like Credit screen for the stuff I'm not using yet.
Started main menu

### Rethinking the EventEmitter stuff
Should I reduce the amount of emitters?

### Gameplay
Should I introduce a slowdown of when enemies get close to the player?
Could make the game to easy.

### Performance
Let's hope I can get away with it :D

## 2015-12-07
Alright, lots of stuff moved pretty easily. Chrome starts dropping frames at
~250 components, down to 30fps at 500 components.

I'm getting the React key warning
(`Each child in an array or iterator should have a unique "key" prop`)
not sure if this will bump the performance. I could replace React with a plain
renderer (no DOM diff), since every frame nearly all the components change.

If I move back to the old Canvas code, I could fiddle with
[`context.scale`](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/scale)
but I really like the crispness of vector graphics

Anyway with [svg fonts](http://caniuse.com/#feat=svg-fonts) support being declared
deprecated and slowly vanishing, Text.js is a TTF converted to SVG (used a
website to do the job) and then rewritten to be a React component.

## 2015-12-04
Edge on Xbox One supports GamePadAPI, but the browser has a odd size
```
window.innerWidth === 1236
window.innerHeight === 701
```
so why shouldn't I move the whole code from Canvas to SVG.
For a easy transition, I could render the whole stuff with React
