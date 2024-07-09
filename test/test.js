// By Arnold Weasly Bolongo & Valentine Kiguli

import {assert} from 'chai';
import {factorial} from '../factorial.js';
import { describe } from 'mocha';
import { it } from 'mocha';

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


