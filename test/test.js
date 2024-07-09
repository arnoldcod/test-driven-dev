

import {assert} from 'chai';
import { describe } from 'mocha';
import { it } from 'mocha';




//?MULTIPLICATION
//assertEqual(multiply(1, 1), 1); //!function not defined

// import {multiply} from '../multiply.js';

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
//  import {factorial} from '../factorial.js';

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

//     it('returns -1', function(){                //cycle6
//         assert.strictEqual(factorial(126), -1); 
//     })
// })


// //?FIBONACCI
// // assert.Equal(fibonacci(0),1); //!function not defined
import {fibonacci} from '../fibonacci.js';

describe('fibonacci', function() {
    it('returns 0', function(){                 //cycle 1
        assert.strictEqual(fibonacci(0), 0); 
    })

    it('returns 1', function(){                 //cycle 2
        assert.strictEqual(fibonacci(1), 1); 
    })

    it('returns 1', function(){                 //cycle 3
        assert.strictEqual(fibonacci(2), 1); 
    })

    it('returns 2', function(){                 //cycle 4
        assert.strictEqual(fibonacci(3), 2); 
    })

    it('returns 3', function(){                 //cycle 5
        assert.strictEqual(fibonacci(4), 3); 
    })

    it('returns 5', function(){                 //cycle 6
        assert.strictEqual(fibonacci(5), 5); 
    })

    it('returns 34', function(){                 //cycle 7
        assert.strictEqual(fibonacci(9), 34); 
    })

    it('returns 144', function(){                 //cycle 8
        assert.strictEqual(fibonacci(12), 144); 
    })

    it('returns 1134903170', function(){    //cycle 9
        assert.strictEqual(fibonacci(45), 1134903170); 
    })

    it('returns 1.3069892237633987e+308', function(){    //cycle 10
        assert.strictEqual(fibonacci(1476),  1.3069892237633987e+308); 
    })

    // it('Operation not feasible', function(){                 //cycle 11
    //     assert.strictEqual(fibonacci(1478), 0); 
    // })
})




// //?STRECH

// //?TAX
// // assert.Equal(tax(15000), 3000);//cycle 1 //!function not defined 

// import {tax} from '../tax.js';

// describe('TaxCalculation', function() {
//     it('returns tax 3000', function(){           //cycle 2
//         assert.strictEqual(tax(15000), 3000); 
//     })

//     it('no tax', function(){                       //cycle 3
//         assert.strictEqual(tax(1000), 0); 
//     })

//     it('returns tax 9000', function(){               //cycle 4
//         assert.strictEqual(tax(45000), 9000); 
//     })
// })