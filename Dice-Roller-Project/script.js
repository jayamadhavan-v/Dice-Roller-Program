// Dice Rooler Program

function rollDice() {

    const numOfDice = document.getElementById("numOfDice").value;
    const diceResult = document.getElementById("diceResult");
    const diceImage = document.getElementById("diceImage");
    const values = [];
    const images = [];

    for(let i = 0;i< numOfDice ;i++){
        const  value = Math.floor( Math.random() *6)+1;
        // console.log(value);
        values.push(value);
        images.push(`<img src="/Assests/dice-${value}.png" width="200" height="200" >`);
    }
    // console.log(values);
    diceResult.textContent = `dice : ${values.join(', ')}`;
    diceImage.innerHTML =images.join(' ');
}