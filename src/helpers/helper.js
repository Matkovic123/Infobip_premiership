export const parseMatchesForRound = (roundObject) => {
    return ( roundObject.matches.map((match) => {
        const teams = Object.keys(match);
        const results = Object.values(match);
        return {
            homeTeam: teams[0],
            opponentTeam: teams[1],
            homeTeamScore: results[0],
            opponentTeamScore: results[1]
        }
    }));
};

export const createOptionsForSelect = (rounds) => {
    let optionsArray = [];
    for (let i = 0; i < rounds.length; i++) {
        optionsArray.push({value: i + 1, label: 'Round ' + (i + 1)})
    }
    return optionsArray;
};

export const createStatistics = (rounds) => {
    let clubsArray = [];
    let clubNames = [];
    rounds[0].matches.forEach((match) => {
        const names = Object.keys(match);
        names.forEach(name => {
            clubNames.push(name);
        })
    });

    clubNames.forEach(club => {
        let nrOfMatches, matchesStats, scoreStats, goals, nets, goalDiff, points;
        nrOfMatches = rounds.length;
        matchesStats = calculateMatchesStats(club, rounds);
        scoreStats = calculateScoreStats(club, rounds);
        points = matchesStats.won * 3 + matchesStats.draws;
        console.log(club, points);
    });
    return clubsArray;
};

const calculateMatchesStats = (club, rounds) => {
    let wins = 0;
    let loses = 0;
    let draws = 0;
    rounds.forEach(round => {
        round.matches.forEach(match => {
            let playingClubs = Object.keys(match);
            let clubsGoals = Object.values(match);
            if (playingClubs.indexOf(club) === 0) {
                if (clubsGoals[0] > clubsGoals[1]) {
                    wins++;
                }
                else if (clubsGoals[0] < clubsGoals[1]) {
                    loses++;
                }
                else {
                    draws++;
                }
            }
            if (playingClubs.indexOf(club) === 1) {
                if (clubsGoals[1] > clubsGoals[0]) {
                    wins++;
                }
                else if (clubsGoals[1] < clubsGoals[0]) {
                    loses++;
                }
                else {
                    draws++;
                }
            }
        })
    });
    return {won: wins, lost: loses, draws: draws};
};
const calculateScoreStats = (club, rounds) => {
    let goals = 0;
    let nets = 0;
    rounds.forEach((round) => {
        round.matches.forEach(match => {
            let playingClubs = Object.keys(match);
            let clubsGoals = Object.values(match);
            if (playingClubs.indexOf(club) === 0) {
                goals += clubsGoals[0];
                nets += clubsGoals[1]
            }
            else if (playingClubs.indexOf(club) === 1) {
                goals += clubsGoals[1];
                nets += clubsGoals[0];
            }
        })
    })
    return {goals: goals, nets: nets, goalDiff: (goals - nets)}
};
const calculatePoints =(matchesStats) => {
    console.log(matchesStats);
    let points = 0;

};

// matchStatisticsObject = {//
//     clubName: 'Lionheart',
//     nrOfMatches:4,
//     wins: 2,
//     losses: 2,
//     draws: 0,
//     goals:4,
//     nets:4,
//     goalDiff: 0,
//     points: 12,
//     position: 1,
// };