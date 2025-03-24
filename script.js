var interMiami = 11;
var fcDallas = 11;
function play(teamOne, teamTwo) {
    if (teamOne > teamTwo)
        console.log("Inter Miami won!");
    if (teamOne == teamTwo)
        console.log("Tie!");
    if (teamOne < teamTwo)
        console.log("FC Dallas won!");
}
play(interMiami, fcDallas);
