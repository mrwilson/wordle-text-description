# wordle-text-description

A browser extension to generate a screen-reader-friendly representation of a Wordle game.

## Motivation

People like to tweet their [Wordle](https://www.powerlanguage.co.uk/wordle/) games as emoji.

These are inaccessible to screen reading technology.

This extension generates a text representation of the game as Twitter does not currently provide a way to add alt text to non-image Tweets.

## Example

Emoji version:

```
⬜️⬜️⬜️⬜️🟨
🟨🟨⬜️⬜️⬜️
⬜️⬜️🟨🟨⬜️
⬜️🟩🟩⬜️🟨
🟩🟩🟩🟩🟩
```

Text version:

```
1. One letter in wrong slot (slot 5)
2. Two letters in wrong slot (slots 1 and 2)
3. Two letters in wrong slot (slots 3 and 4)
4. Two letters in right slot (slots 2 and 3), one letter in wrong slot (slot 5)
5. Word guessed correctly!
```