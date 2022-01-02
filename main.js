import(browser.runtime.getURL('describe.js'))
  .then((module) => {
    console.log(module.getTileStates())
  });
