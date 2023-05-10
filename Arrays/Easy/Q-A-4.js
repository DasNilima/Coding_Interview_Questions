/* Tournament Winner 
There's an algorithms tournament taking place in which teams of programmers compete against each other to solve algorithmic
problems as fast as possible. Teams compete in a round robin, where each team faces off against all other teams. only two teams 
compete against each other at a time, and for each competition, one team is designated the home team, while the other team is the 
away team. In each competition there's always one winner and one loser; there are no ties. A team receives 3 points if it wins and  0
points if it loses. The winner of the tournament is the team that receives th emost amount of points.

Given an array of pairs representing the teams that have completed against each other and an array containing the result of each
competition, write a function that returns the winner of the tournament. The input arrays are named competitions and results, respectively.
The competitions array has elements in the form of [homeTeam, awayTeam], where each team is a string of at most 30 characters representing 
the name of the team. The results array caontain information about the winner of each corresponding competition in the competiition arrays.
Specifically, results[i] denotes the winner of competitions[i], where a 1 in the results array means that the home team in the corresponding 
competition won and a 0 means that the away team won.
it's guaranteed that exactly one team will win the tournament and that each team will compete against all other temas exactly once.It's also 
guaranteed that the tournament will always have at least two teams.
Sample Input:
competitions = [
    ["HTML", "C#"],
    ["C#", "Python"],
    ["Python", "HTML"]
]
results = [0, 0, 1]
 */
/* solution and ideas :
1. The main objective here is to find the team which scored a maximum.
so we need to calculate the score of each team and then declare who's the winner.
first define tournamentWinner function taking competition and result as an arguement, then declare currentBestTeam variable is an empty string and alse create scores variable that
will keep track of all of the scores of the teams, then loop through the entire competitions array, set the corresponding result variable from the results array,destrucring the home team and away team and 
set the winning team varaible based on the value of result, then update the score of this winningTeam by adding 3 points to it and check that   need to update the currentBestTeam based on this team that just won.
Again need to check that if the scores for the winningTeam with the score that updated is greater than the score of the currentBestTeam.
Declare updateScore function that updating the scores and handling the case in which the team is not already a key in our scores data structure.
*/


function tournamentWinner(competitions, results) {
  // Write your code here.
    let currBestTeam = '';
    const HOME_TEAM_WON = 1;
    const scores = {[currBestTeam]: 0};
for (let i = 0; i < competitions.length; i++) {
    const [homeTeam, awayTeam] = competitions[i];
    const result = results[i];

    const winningTeam = result === HOME_TEAM_WON ? homeTeam: awayTeam;

    updateScores(winningTeam, 3, scores);
    
    if (scores[winningTeam] > scores[currBestTeam]) {
        currBestTeam = winningTeam;
    } 
}
    return currBestTeam;
}

function updateScores(team, points, scores) {
    if (!(team in scores)) scores[team] = 0;
    scores[team] += points;
}


/* Solution and ideas: 2
instead of iterating through the hash table to find the team that has the most points, we can keep track of the current best team as we build the hash table for team points.
More specifically, we need to remember the name of the current best team. To retrive the current best team's score, we can simply look at it in the hash table.
Store `1` and `3` in a constant variable, so we can use the constant variable later rather than having to write 1 in our program. This will make our code more readable.
 */


const HOME_TEAM_WON = 1;
const POINTS = 3;

function tournamentWinner(competitions, results) {
    // Write your code here.
    let currBestTeam = '';
    const scores = { [currBestTeam]: 0 };
    
    for (let i = 0; i < competitions.length; i++) {
        const [homeTeam, awayTeam] = competitions[i];
        const result = results[i];

        const winningTeam = result === HOME_TEAM_WON ? homeTeam : awayTeam;

        updateScores(scores, winningTeam);

        if (scores[winningTeam] > scores[currBestTeam]) {
            currBestTeam = winningTeam;
        }
    }
    return currBestTeam;
}

function updateScores(scores, team) {
    const prevScore = scores[team] || 0;
    scores[team] = prevScore + POINTS
}

/* Short JS Clean Soltion */
function tournamentWinner(competitions, results) {
    // Write your code here.
    const scores = {};
    let currBestTeam = '';
    
    results.map((result, i) => { // we can use forEach, filter, some in replace of map
    const winningTeam = result ? competitions[i][0] : competitions[i][1]
    scores[winningTeam] ? scores[winningTeam] +=3 : scores[winningTeam] = 3;
    if (!currBestTeam ||scores[winningTeam] > scores[currBestTeam]) {
        currBestTeam = winningTeam;
    }
    
    })
    return currBestTeam;
}
/* Complexity Analysis
Time Complexity: O(N), where N is the number of competitions.
Space Complexity: O(K), where K is the number of teams. */