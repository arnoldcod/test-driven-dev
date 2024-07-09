// By Arnold Weasly Bolongo & Valentine Kiguli

import {assert} from 'chai';
import {factorial} from '../factorial.js';
import { describe } from 'mocha';
import { it } from 'mocha';

describe('factorial', function() {
    it('returns 1', function(){                 //cycle 1
        assert.strictEqual(factorial(-1), -1); 
    })

    it('returns 1', function(){                 //cycle 2
        assert.strictEqual(factorial(0), 1); 
    })

    it('returns 2', function(){                //cycle 3
        assert.strictEqual(factorial(2), 2); 
    })

    it('returns 6', function(){                //cycle 4
        assert.strictEqual(factorial(3), 6); 
    })
    it('returns 6', function(){                //cycle 5
        assert.strictEqual(factorial(140), -1); 
    })
})


