



//MULTIPLY


// assert.Equal(multiply(1, 1), 1); ////red and not working

 import {assert} from 'chai';

// import {multiply} from '../multiply.js';

import {factorial} from '../factorial.js';
import { describe } from 'mocha';


// describe ('Multiplier', function(){
  
//    //cycle 1
//   it('returns 1', function() {
// assert.strictEqual(multiply(1, 1), 1, ); 
//   })

//      //cycle 2
//      it('returns 2', function() {
//       assert.strictEqual(multiply(2, 2), 4); 
//         })

//         //cycle 3
//      it('returns 9', function() {
//       assert.strictEqual(multiply(3, 3), 9); 
//         })


//             //cycle 4
//      it('returns 16', function() {
//       assert.strictEqual(multiply(4, 4), 16); 
//         })

//               //cycle 5
//      it('returns 1035', function() {
//       assert.strictEqual(multiply(23, 45), 1035); 
//         })
//     })




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
})


