import { assert } from "chai";
import { describe, it } from "mocha";
import { number } from "../src/testing123";

describe("Testing 1-2-3", () => {
    it("should return empty array", () => {
        assert.deepEqual(number([]), []);
    });
    it("should work on simple case", () => {
        assert.deepEqual(number(["a", "b", "c"]), ["1: a", "2: b", "3: c"]);
    });
    it("should work on array containing empty string", () => {
        assert.deepEqual(number(["", "", "", ""]), ["1: ", "2: ", "3: ", "4: "]);
    });
});
