const { from } = require('rxjs');
const { map } = require('rxjs/operators');

let tree$ = from(["🌳", "🌴", "🌱", "🌲","🍀"])
   		.pipe(
					map(item => 2+item),
					map(item => item+"   "+3)
      );
      
tree$.subscribe( item => console.log(item))