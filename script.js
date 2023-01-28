let rock = 'rock'
let paper = 'paper'
let scissors = 'scissors'

let num = Math.floor(Math.random() * 3);

function compchoice(choice) {
    if (num == 0) {
        return rock
    }
    else if (num == 1) {
        return paper
    }
    else if (num == 2) {
        return scissors
    }
    else {

    }
}
console.log('Computer\'s pick was', compchoice(num));

let my_pick = prompt('rock, paper, or scissors');

function player_game(pick) {
    let n = 0
    while (n == 0) {
    if (my_pick == 'rock') {
        return rock
    }
    else if (my_pick == 'paper') {
        return paper
    }
    else if (my_pick == 'scissors') {
        return scissors
    }
    else {
        return 'retype your answer'
    }
}
}

console.log('Your pick was', player_game())
let score_comp = 0
let score_player = 0
function winner() {
    if ((num == 0 && my_pick == 'rock') || (num == 1 && my_pick == 'paper') || (num == 2 && my_pick == 'scissors')){
        return 'Tie, try again!'
    }
    else if ((num == 0 && my_pick == 'paper') || (num == 1 && my_pick == 'scissors') || (num == 2 && my_pick == 'rock')){
        return 'You win!'
        let score_player =+ 1
    }
    else if ((num == 0 && my_pick == 'scissors') || (num == 1 && my_pick == 'rock') || (num == 2 && my_pick == 'paper')) {
        return 'You lose!'
        let score_comp =+ 1
    }
    else {

    }
}

console.log(winner())