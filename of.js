const { of } = require('rxjs');

of(1, 2, 3, 4, 5).subscribe(val => console.log(val));