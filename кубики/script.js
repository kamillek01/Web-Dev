let rollCount = 0; 

document.getElementById('rollButton').addEventListener('click', function() {
    let dice1 = Math.floor(Math.random() * 6) + 1;
    let dice2 = Math.floor(Math.random() * 6) + 1;

    document.getElementById('dice1').src = `dice${dice1}.png`;
    document.getElementById('dice2').src = `dice${dice2}.png`;

    let sum = dice1 + dice2;
    document.getElementById('result').textContent = `You rolled: ${dice1} and ${dice2}. Sum: ${sum}.`;

    if (dice1 === dice2) {
        document.getElementById('result').textContent += ' Doubles! You win!';
    }

    
    rollCount++;
    document.getElementById('rollCounter').textContent = `Roll Count: ${rollCount}`;
});
