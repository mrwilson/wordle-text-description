export function getTileStates() {
    let game = document.getElementsByTagName('game-app')[0].shadowRoot

    let manager = game.querySelectorAll('game-theme-manager')[0];

    let nonEmptyRows = [...manager.querySelectorAll('game-row')].filter(row => row.getAttribute('letters') != "");

    let tiles = nonEmptyRows
        .map(row => [...row.shadowRoot.querySelectorAll('game-tile')].map(tile => tile.getAttribute('evaluation')))
        .map(tileList => tileList.reduce((state, tile, index) => { state[tile].push(index); return state }, {'present':[], 'absent': [], 'correct':[]}));

    return tiles;
}

export function numberToWord(number) {

    if (number < 1 || number > 5) {
        throw 'Input outside of range [1,5]';
    }

    return ["one","two","three","four","five"][number - 1];
}