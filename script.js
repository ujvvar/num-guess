let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;
// generate secret target number
let generateTarget = () => {
    return Math.floor(Math.random() * 10);
} 
/* calculate distance from secret target
in case of tie, human wins
*/
let compareGuesses = (human, computer, target) => {
    let humanDiff = Math.abs(target - human);
    let computerDiff = Math.abs(target - computer); 
    return humanDiff <= computerDiff;
}
// increase winner's score by 1
let updateScore = (winner) => {
    if (winner === "human") {
        humanScore++;
    } else if (winner === "computer") {
        computerScore++;
    }
}
// update round number after each round
let advanceRound = () => currentRoundNumber++;