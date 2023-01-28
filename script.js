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



function your_choice(pick) {
yours = prompt('Choose \'rock\', \'paper\', or \'scissors\'')
if (yours == 'rock') {  
    return 'rock'
}
else if (yours == 'paper') {  
    return 'paper'
}
else if (yours == 'scissors') {
    return 'scissors'
}
}

console.log('Computer\'s pick was', compchoice(num));
console.log('Your choice was', your_choice(yours))