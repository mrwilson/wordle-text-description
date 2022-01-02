let runtime = chrome !== undefined ? chrome.runtime : browser.runtime;

import(runtime.getURL('describe.js'))
  .then((module) => {
    let guesses = module.getTileStates();

    let description = guesses.map((guess, index) => `${index+1}. ${module.describeGuess(guess)}`).join("\n");

    let copyToClipboard = document.createElement('button');
    copyToClipboard.textContent = 'Copy description to clipboard';

    copyToClipboard.addEventListener('click', (e) => navigator.clipboard.writeText(description), false);

    document.body.prepend(copyToClipboard);
  });
