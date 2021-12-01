    // 1. user can click on any button to disable it
    // 2. clicking on reset should re-enable every button
    // 2:20pm
    var guessButtons = document.querySelectorAll('section button')
    var resetBtn = document.querySelector('.reset-btn')
    var guessNumberSpan = document.querySelector('.guess-number-span')
    var messageDiv = document.querySelector('.message-div')

    var guessNumber = 3; // number
    var secretNumber = Math.floor(Math.random() * 10) + 1

    // game loop
    function handleUserGuess(event) {
      guessNumber--
      guessNumberSpan.textContent = guessNumber

      let theOneTheUserClickedOn = event.target
      theOneTheUserClickedOn.disabled = true

      let userGuess = Number(theOneTheUserClickedOn.dataset.number)
      console.log(userGuess)

      if (userGuess === secretNumber) {
        messageDiv.textContent = 'you got it!'
        // disable all number buttons
        for (var i = 0; i < guessButtons.length; i++) {
          guessButtons[i].disabled = true
        }
        return
      }

      if (guessNumber === 0) {
        messageDiv.textContent = 'game over!'
        for (var i = 0; i < guessButtons.length; i++) {
          guessButtons[i].disabled = true
        }
        return        
      }
    }

    function handleReset() {
      // reset all numbered buttons
      for (let i = 0; i < guessButtons.length; i++) {
        guessButtons[i].disabled = false
      }

      // reset guesses
      guessNumber = 3;
      guessNumberSpan.textContent = 0;

      // reset message
      messageDiv.textContent = ''
    }

    guessButtons.forEach(function(button, idx) {
      button.addEventListener('click', handleUserGuess)
    })

    for (var i = 0; i < guessButtons.length; i++) {
      var button = guessButtons[i]
      button.addEventListener('click', handleUserGuess)
    }

    resetBtn.addEventListener('click', handleReset)



