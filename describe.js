export function getTileStates() {
    let game = document.getElementsByTagName('game-app')[0].shadowRoot

    let manager = game.querySelectorAll('game-theme-manager')[0];

    let nonEmptyRows = [...manager.querySelectorAll('game-row')].filter(row => row.getAttribute('letters') != "");

    let tiles = nonEmptyRows
        .map(row => [...row.shadowRoot.querySelectorAll('game-tile')].map(tile => tile.getAttribute('evaluation')))
        .map(tileList => tileList.reduce((state, tile, index) => { state[tile].push(index); return state }, {'present':[], 'absent': [], 'correct':[]}));

    return tiles;
}

export function describeGuess(tileList) {

    const describeSlots = (slots) => {
        let oneIndexedSlots = slots.map((i) => i+1);

        if (oneIndexedSlots.length == 1) {
            return `(slot ${oneIndexedSlots[0]})`
        } else {
            return `(slots ${oneIndexedSlots.slice(0, -1).join(",")} and ${oneIndexedSlots.slice(-1)[0]})`
        }

    };


    if (tileList["absent"].length == 5) {
        return "No correct letters";
    }

    if (tileList["correct"].length == 5) {
        return "Word guessed correctly!";
    }

    let output = []

    if (tileList["correct"].length > 0) {
        let matches = tileList["correct"].length
        output.push(`${numberToWord(matches)} letter${matches == 1 ? "" : "s"} in right slot ${describeSlots(tileList["correct"])}`);
    }

    if (tileList["present"].length > 0) {
        let matches = tileList["present"].length
        output.push(`${numberToWord(matches)} letter${matches == 1 ? "" : "s"} in wrong slot ${describeSlots(tileList["present"])}`);
    }

    let text = output.join(", ");

    return text[0].toUpperCase() + text.slice(1)

}

export function numberToWord(number) {

    if (number < 1 || number > 5) {
        throw 'Input outside of range [1,5]';
    }

    return ["one","two","three","four","five"][number - 1];
}