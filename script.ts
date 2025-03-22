let interMiami: number = 11
let fcDallas: number = 11

function play(teamOne: number, teamTwo: number): void {
    if(teamOne > teamTwo) console.log("Inter Miami won!")
    if(teamOne == teamTwo) console.log("Tie!")
    if(teamOne < teamTwo) console.log("FC Dallas won!")
}

play(interMiami, fcDallas)