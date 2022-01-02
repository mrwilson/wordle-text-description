import(browser.runtime.getURL('describe.js'))
  .then((module) => {
    let guesses = module.getTileStates();

    console.log(guesses.map((guess, index) => `${index+1}. ${module.describeGuess(guess)}`));
  });