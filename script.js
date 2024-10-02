document.getElementById('rollButton').addEventListener('click', rollDice);

function rollDice() {
    const diceFaces = ['⚀', '⚁', '⚂', '⚃', '⚄', '⚅'];
    const randomIndex = Math.floor(Math.random() * diceFaces.length);
    const rolledFace = diceFaces[randomIndex];

    document.getElementById('dice').innerText = rolledFace;
    document.getElementById('result').innerText = `You rolled a ${randomIndex + 1}!`;
}
