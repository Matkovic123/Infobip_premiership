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

export const getClubNames = (rounds) => {
    let clubNames = [];
    rounds[0].matches.forEach((match) => {
        const names = Object.keys(match);
        names.forEach(name => {
            clubNames.push(name);
        })
    });
    return clubNames;
};

export const createStatistics = (rounds, clubNames) => {
    let clubsStats = [];

    clubNames.forEach(club => {
        let nrOfMatches, matchesStats, scoreStats, points;
        nrOfMatches = rounds.length;
        matchesStats = calculateMatchesStats(club, rounds);
        points = matchesStats.won * 3 + matchesStats.draws;
        clubsStats.push({
            name: club,
            nrOfMatches: nrOfMatches,
            wins: matchesStats.won,
            lastFiveMatches: matchesStats.lastFiveMatches,
            loses: matchesStats.lost,
            draws: matchesStats.draws,
            goals: matchesStats.goals,
            nets: matchesStats.nets,
            goalDiff: matchesStats.goalDiff,
            points: points
        })
    });
    clubsStats.sort(compareClubs);
    console.log(clubsStats);
    return clubsStats;
};

const calculateMatchesStats = (club, rounds) => {
    let wins = 0;
    let loses = 0;
    let draws = 0;
    let lastFiveMatches = [];
    let goals = 0;
    let nets = 0;
    rounds.forEach(round => {
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
            if (playingClubs.indexOf(club) === 0) {
                if (clubsGoals[0] > clubsGoals[1]) {
                    wins++;
                    lastFiveMatches.push('Won');
                }
                else if (clubsGoals[0] < clubsGoals[1]) {
                    loses++;
                    lastFiveMatches.push('Lost');
                }
                else {
                    draws++;
                    lastFiveMatches.push('Draw');
                }
            }
            else if (playingClubs.indexOf(club) === 1) {
                if (clubsGoals[1] > clubsGoals[0]) {
                    wins++;
                    lastFiveMatches.push('Won');
                }
                else if (clubsGoals[1] < clubsGoals[0]) {
                    loses++;
                    lastFiveMatches.push('Lost');
                }
                else {
                    draws++;
                    lastFiveMatches.push('Draw');
                }
            }
        })
    });
    lastFiveMatches = lastFiveMatches.slice(lastFiveMatches.length - 5, lastFiveMatches.length);
    lastFiveMatches.reverse();
    return {
        won: wins,
        lost: loses,
        draws: draws,
        lastFiveMatches: lastFiveMatches,
        goals: goals,
        nets: nets,
        goalDiff: (goals - nets)
    };
};

const compareClubs = (a, b) => {
    if (a.points < b.points)
        return 1;
    if (a.points > b.points)
        return -1;
    if (a.goalDiff < b.goalDiff)
        return 1;
    if (a.goalDiff > b.goalDiff)
        return -1;
    if (a.goals < b.goals)
        return 1;
    if (a.goals > b.goals)
        return -1;
    return 0;
};