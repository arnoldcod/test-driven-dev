// By Arnold Weasly Bolongo & Valentine Kiguli

import {assert} from 'chai';
import { describe } from 'mocha';
import { it } from 'mocha';

// import {multiply} from '../multiply.js';
import {factorial} from '../factorial.js';




//MULTIPLICATION

//assertEqual(multiply(1, 1), 1);

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



//FACTORIAL

// assert.Equal(factorial(0),1);

describe('factorial', function() {
    it('returns 1', function(){                 //cycle 1
        assert.strictEqual(factorial(0), 1); 
    })

    it('returns 1', function(){                 //cycle2
        assert.strictEqual(factorial(1), 1); 
    })

    it('returns 2', function(){                //cycle3
        assert.strictEqual(factorial(2), 2); 
    })

    it('returns 6', function(){                //cycle4
        assert.strictEqual(factorial(3), 6); 
    })

    it('returns -1', function(){                //cycle5
        assert.strictEqual(factorial(-1), -1); 
    })

    it('returns -1', function(){                //cycle5
        assert.strictEqual(factorial(126), -1); 
    })
})


