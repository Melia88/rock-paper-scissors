
// KEY
let choices = [
  "Rock", "Paper", "Scissors"
]


// BTN FUNCTIONS
function play(playerChoice) {
  //Sets computerChoice result function to compChoice
  let compChoice = computerChoice()
  drawUserChoice(playerChoice)
  // removes classes to reset result
  document.getElementById("box3").classList.remove('bg-warning', 'bg-success', 'bg-danger')

  // console.log("Rock")
  //  default image at start
  // // // document.getElementById('user-choice').src = "https://images.unsplash.com/photo-1614032686163-bdc24c13d0b6?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=967&q=80"

  //  compares what the computer chose vs what player chose. if its the same its a tie 
  if (compChoice == playerChoice) {
    document.getElementById("results").innerText = "Tied!!"
    document.getElementById("box3").classList.add("bg-warning")
    // if they lost
  }
  else if (playerChoice == "Rock") {
    console.log("Rock")
    //  default image at start

    if (compChoice == "Paper") {
      document.getElementById("results").innerText = "You Lose!!"
      document.getElementById("box3").classList.add("bg-danger")
    }

    //  if they won
    else {
      document.getElementById("results").innerText = "You Win!!"
      document.getElementById("box3").classList.add("bg-success")
    }
    //  
  }
  else if (playerChoice == "Paper") {
    console.log("Paper")


    if (compChoice == "Scissors") {
      document.getElementById("results").innerText = "You Lose!!"
      document.getElementById("box3").classList.add("bg-danger")
    } else {
      document.getElementById("results").innerText = "You Win!!"
      document.getElementById("box3").classList.add("bg-success")
    }

  }
  else {
    console.log("Scissors")


    if (compChoice == "Rock") {
      document.getElementById("results").innerText = "You Lose!!"
      document.getElementById("box3").classList.add("bg-danger")
    } else {
      document.getElementById("results").innerText = "You Win!!"
      document.getElementById("box3").classList.add("bg-success")
    }

  }

}


// function play2(playerChoice) {
// let compChoice = computerChoice()
// document.getElementById("box3").classList.remove('bg-warning', 'bg-success', 'bg-danger')
// 
// console.log("Paper")
// // // document.getElementById('user-choice').src = "https://images.unsplash.com/photo-1614032686158-b880f7e82c18?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=967&q=80"
// 
// 
// if (compChoice == playerChoice) {
// document.getElementById("results").innerText = "Tied!!"
// document.getElementById("box3").classList.add("bg-warning")
// } else if (compChoice == "Scissors" && playerChoice == "Paper") {
// document.getElementById("results").innerText = "You Lose!!"
// document.getElementById("box3").classList.add("bg-danger")
// } else {
// document.getElementById("results").innerText = "You Win!!"
// document.getElementById("box3").classList.add("bg-success")
// }
// 
// }

// function play3(playersChoice) {
// let compChoice = computerChoice()
// document.getElementById("box3").classList.remove('bg-warning', 'bg-success', 'bg-danger')
// 
// console.log("Scissors")
// // // document.getElementById('user-choice').src = "https://images.unsplash.com/photo-1614032686099-e648d6dea9b3?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=967&q=80"
// 
// if (compChoice == playersChoice) {
  // document.getElementById("results").innerText = "Tied!!"
  // document.getElementById("box3").classList.add("bg-warning")
// 
// } else if (compChoice == "Rock" && playersChoice == "Scissors") {
  // document.getElementById("results").innerText = "You Lose!!"
  // document.getElementById("box3").classList.add("bg-danger")
// } else {
  // document.getElementById("results").innerText = "You Win!!"
  // document.getElementById("box3").classList.add("bg-success")
// }





// }
function drawUserChoice(choice){
  if (choice == "Rock") {
    document.getElementById("user-choice").src = "https://images.unsplash.com/photo-1614032686163-bdc24c13d0b6?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=967&q=80"
  } else if (choice == "Paper") {
    document.getElementById('user-choice').src = "https://images.unsplash.com/photo-1614032686158-b880f7e82c18?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=967&q=80"
  } else if (choice == "Scissors") {
    document.getElementById('user-choice').src = "https://images.unsplash.com/photo-1614032686099-e648d6dea9b3?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=967&q=80"
  }

}

// Random Generator
function computerChoice() {
  // gets random number between 0 and length of array
  let index = Math.floor(Math.random() * choices.length)
  //picks random string from the array of choices given the index 
  let computerChoice = choices[index]
  // sets appr image based on what item in the index is chosen in the conditional if/else statement
  if (computerChoice == "Rock") {
    document.getElementById("computer-choice").src = "https://images.unsplash.com/photo-1614032686163-bdc24c13d0b6?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=967&q=80"
  } else if (computerChoice == "Paper") {
    document.getElementById('computer-choice').src = "https://images.unsplash.com/photo-1614032686158-b880f7e82c18?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=967&q=80"
  } else if (computerChoice == "Scissors") {
    document.getElementById('computer-choice').src = "https://images.unsplash.com/photo-1614032686099-e648d6dea9b3?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=967&q=80"
  }

  return computerChoice
}


