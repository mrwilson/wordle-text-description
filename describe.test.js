import { numberToWord } from './describe.js'

describe('Numbers to words', () => {
    test('should turn 1-5 into word form', () => {
        let expected = [1,2,3,4,5].map(numberToWord);

        expect(expected).toStrictEqual(["one", "two", "three", "four", "five"]);
    });
    test('should error on anything outside that range', () => {
        expect(() => numberToWord(0)).toThrow("Input outside of range [1,5]");
        expect(() => numberToWord(6)).toThrow("Input outside of range [1,5]");
    });
});