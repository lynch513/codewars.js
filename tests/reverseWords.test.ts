import { assert } from "chai";
import { describe, it } from "mocha";
import { reverseWords } from "../src/reverseWords";


describe("Sample Test Cases", function(){
  it("Should return a proper value", function() {
    assert.equal(reverseWords('The quick brown fox jumps over the lazy dog.'), 'ehT kciuq nworb xof spmuj revo eht yzal .god');
    assert.equal(reverseWords('apple'), 'elppa');
    assert.equal(reverseWords('a b c d'), 'a b c d');
    assert.equal(reverseWords('double  spaced  words'), 'elbuod  decaps  sdrow');
  });
});
