# wordle-text-description

A browser extension that adds a button to generate a screen-reader-friendly representation of a Wordle game.

![image](https://user-images.githubusercontent.com/460299/147882457-8d278dea-b16e-4c08-ac56-fbe4905801a9.png)

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

## Installation

This extension is currently not published.

You can install as a [Temporary Extension in Firefox](https://developer.mozilla.org/en-US/docs/Tools/about:debugging#loading_a_temporary_extension) or as an [unpacked extension in Chrome](https://developer.chrome.com/docs/extensions/mv3/getstarted/#manifest)
