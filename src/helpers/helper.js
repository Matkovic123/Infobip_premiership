
export const parseMatchesForRound = (roundObject) => {
    return( roundObject.matches.map((round) => {
        const teams = Object.keys(round);
        const results = Object.values(round);
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
    for(let i = 0; i<rounds.length; i++) {
        optionsArray.push({value: i+1, label: 'Round ' + (i+1)})
    }
    return optionsArray;
};