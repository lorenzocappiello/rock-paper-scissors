function MyChoiceIs(userChoice) {
    document.querySelector('.computer-choice').className = 'computer-choice stop-spinning';
    const randomNumber = Math.ceil(Math.random()*2);
    const computerChoice = ['rock','paper','scissors'][randomNumber];
    document.querySelector('.computer-choice .'+computerChoice).style.display = 'block';
    const draw = userChoice === computerChoice;

    if (draw) {
      document.querySelector('.result').innerText = 'DRAW! 😅';
    } else {
      const userWon = (userChoice === 'rock' && computerChoice === 'scissors') || (userChoice === 'paper' && computerChoice === 'rock') || (userChoice === 'scissors' && computerChoice === 'paper');
      if (userWon) {
        document.querySelector('.result').innerText = 'YOU WON! 🎉';
      } else {
        document.querySelector('.result').innerText = 'YOU LOST! 😢';
      }
    }
    setTimeout(function () {
      window.location.reload();
    }, 1800);
}