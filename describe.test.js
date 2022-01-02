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

    test('when one slot is a present match', () => {
      let example = { "correct": [], "present": [0], "absent": [1,2,3,4] };

      expect(describeGuess(example)).toBe("One letter in wrong slot (slot 1)");
    });

    test('when at least two slots are a present match', () => {
      let example = { "correct": [], "present": [0,1], "absent": [2,3,4] };

      expect(describeGuess(example)).toBe("Two letters in wrong slot (slots 1 and 2)");
    });

    test('when one slot is a correct match', () => {
      let example = { "correct": [0], "present": [], "absent": [1,2,3,4] };

      expect(describeGuess(example)).toBe("One letter in right slot (slot 1)")
    });

    test('when at least two slots are a correct match', () => {
      let example = { "correct": [0,1], "present": [], "absent": [2,3,4] };

      expect(describeGuess(example)).toBe("Two letters in right slot (slots 1 and 2)")
    });

    test('when there is a mix of correct and present matches', () => {
      let example = { "correct": [0,4], "present": [1,2], "absent": [3] };

      expect(describeGuess(example)).toBe("Two letters in right slot (slots 1 and 5), two letters in wrong slot (slots 2 and 3)")
    });

    test('when the guess is entirely correct', () => {
      let example = { "correct": [0,1,2,3,4], "present": [], "absent": [] };

      expect(describeGuess(example)).toBe("Word guessed correctly!")
    });
});