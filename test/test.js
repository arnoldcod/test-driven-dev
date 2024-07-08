
// assertEqual(multiply(1, 1), 1);

import {assert} from 'chai';
import {multiply} from '../multiply.js';


describe ('Multiplier', function(){it('multiply returns product', function(){
assert.strictEqual(multiply(1, 1), 1, "multiply(1, 1) should return 1"); //cycle 1
assert.strictEqual(multiply(2, 2), 4, "multiply(2, 2) should return 4"); //cycle 2
assert.strictEqual(multiply(3, 3), 9, "multiply(3, 3) should return 9"); //cycle 3
assert.strictEqual(multiply(4, 4), 16, "multiply(4, 4) should return 16"); //cycle 4
assert.strictEqual(multiply(23, 45), 23 * 45, "multiply(23, 45) should return 23 * 45"); //cycle 5
    })
  })