

import {assert} from 'chai';
import { describe } from 'mocha';
import { it } from 'mocha';

// import {multiply} from '../multiply.js';






//?MULTIPLICATION
//assertEqual(multiply(1, 1), 1); //!function not defined

//  describe( 'Multiplier', function(){
//     it('returns 1', function(){
//         assert.strictEqual(multiply(1, 1), 1);  // cycle1
//     })

//     it('returns 2', function(){
//         assert.strictEqual(multiply(2, 2), 4); //cycle2
//     })

//     it('returns 3', function(){
//         assert.strictEqual(multiply(3, 3), 9);   //cycle3
//     })

//     it('returns 4', function(){
//         assert.strictEqual(multiply(4, 4), 16);   //cycle4
//     })

//     it('returns 1035', function(){
//         assert.strictEqual(multiply(23, 45), 1035);   //cycle5
//     }) 
//  })



// //?FACTORIAL
// // assert.Equal(factorial(0),1); //!function not defined
//* import {factorial} from '../factorial.js';

// describe('factorial', function() {
//     it('returns 1', function(){                 //cycle 1
//         assert.strictEqual(factorial(0), 1); 
//     })

//     it('returns 1', function(){                 //cycle2
//         assert.strictEqual(factorial(1), 1); 
//     })

//     it('returns 2', function(){                //cycle3
//         assert.strictEqual(factorial(2), 2); 
//     })

//     it('returns 6', function(){                //cycle4
//         assert.strictEqual(factorial(3), 6); 
//     })

//     it('returns -1', function(){                //cycle5
//         assert.strictEqual(factorial(-1), -1); 
//     })

//     it('returns -1', function(){                //cycle5
//         assert.strictEqual(factorial(126), -1); 
//     })
// })


//?FIBONACCI
// assert.Equal(fibonacci(0),1); //!function not defined
import {fibonacci} from '../fibonacci.js';

describe('fibonacci', function() {
    it('returns 1', function(){                 //cycle 1
        assert.strictEqual(fibonacci(0), 1); 
    })

    it('returns 1', function(){                 //cycle 2
        assert.strictEqual(fibonacci(1), 1); 
    })

    it('returns 2', function(){                 //cycle 3
        assert.strictEqual(fibonacci(2), 2); 
    })

    it('returns 3', function(){                 //cycle 3
        assert.strictEqual(fibonacci(3), 3); 
    })

    it('returns 5', function(){                 //cycle 4
        assert.strictEqual(fibonacci(4), 5); 
    })

    it('returns 8', function(){                 //cycle 5
        assert.strictEqual(fibonacci(5), 8); 
    })

    it('returns 13', function(){                 //cycle 6
        assert.strictEqual(fibonacci(6), 13); 
    })
})

