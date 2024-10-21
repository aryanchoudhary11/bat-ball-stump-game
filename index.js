let scoreStr = localStorage.getItem('Score');
      let score;
      resetScore(scoreStr);
      function resetScore(scoreStr){
          score = scoreStr ? JSON.parse(scoreStr) : {
          Win: 0,
          Loss: 0,
          Tie: 0,
        };
        score.displayScore = function(){
          return `Win: ${score.Win} Loss: ${score.Loss} Tie: ${score.Tie}`
        }
      }
      function computerMove(){
        computerChoice = Math.random() * 3;
        if(computerChoice < 1){
            computerChoice = 'Bat';
        } else if(computerChoice >= 1 && computerChoice < 2){
            computerChoice = 'Ball';
        } else{
            computerChoice = 'Stump';
        }
        return computerChoice;
      }

      function resultDeclare(userChoice, computerChoice){
        if((computerChoice == 'Bat' && userChoice == 'Ball') || (computerChoice == 'Stump' && userChoice == 'Bat') || (computerChoice == 'Ball' && userChoice == 'Stump')){
            score.Loss++;
            return `Computer won`;
        } else if(computerChoice == userChoice){
            score.Tie++;
            return `It's a tie.`;
        } else{
            score.Win++;
            return `You won`;
        }
      }

      function resultMessage(userChoice, computerChoice, result){
        localStorage.setItem('Score',JSON.stringify(score));
        document.querySelector('.user-choice').innerText = userChoice ? `You have choosen ${userChoice}` : '';
        document.querySelector('.computer-choice').innerText = computerChoice ? `Computer have choosen ${computerChoice}` : '';
        document.querySelector('.result').innerText = result || '';
        document.querySelector('.score').innerText = score.displayScore();

      }