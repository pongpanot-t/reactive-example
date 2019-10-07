const { from, of } = require('rxjs');
const { mergeMap, exhaustMap, delay } = require('rxjs/operators');

const doIt = (x) => {
  return of(x).pipe(
    delay(Math.random() * 200)
  )
}

from(["🌳", "🌴","🌱","🌲", "🍀"])
.pipe(
  mergeMap(x => [x,x]),
  exhaustMap(x => doIt(x))
)
.subscribe(val => console.log(val));
