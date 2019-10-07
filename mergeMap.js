const { from, of } = require('rxjs');
const { mergeMap, map, delay } = require('rxjs/operators');

const doIt = (x) => {
  return of(x).pipe(
    delay(Math.random() * 200)
  )
}

from(["🌳", "🌴","🌱","🌲", "🍀"])
.pipe(
  map(x => [x,x]),
  mergeMap(x => doIt(x))
)
.subscribe(val => console.log(val));