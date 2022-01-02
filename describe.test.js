import { numberToWord, describeGuess } from './describe.js'

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

describe('Describe guess', () => {

    test('when no slots have present or correct matches', () => {
      let example = { "correct": [], "present": [], "absent": [0,1,2,3,4] };

      expect(describeGuess(example)).toBe("No correct letters")
    });

    test('when at least one slot is a present match', () => {
      let example = { "correct": [], "present": [0], "absent": [1,2,3,4] };

      expect(describeGuess(example)).toBe("One letter(s) in wrong slot");
    });

    test('when at least one slot is a correct match', () => {
      let example = { "correct": [0], "present": [], "absent": [1,2,3,4] };

      expect(describeGuess(example)).toBe("One letter(s) in right slot")
    });

    test('when there is a mix of correct and present matches', () => {
      let example = { "correct": [0], "present": [1], "absent": [2,3,4] };

      expect(describeGuess(example)).toBe("One letter(s) in right slot, one letter(s) in wrong slot")
    });
});