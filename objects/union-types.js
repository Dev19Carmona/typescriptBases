"use strict";
;
(() => {
    let myCustomVariable = 'Fernando';
    console.log(typeof myCustomVariable);
    myCustomVariable = 20;
    console.log(typeof myCustomVariable);
    myCustomVariable = {
        name: 'Bruce',
        age: 43,
        powers: ['Super velocidad'],
        // getName() {
        //   return this.name
        // }
    };
    console.log(typeof myCustomVariable);
})();