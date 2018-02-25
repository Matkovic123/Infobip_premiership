import {createStatistics, parseMatchesForRound} from "../helpers/helper";
import * as actions from '../store/actions';

const initialState = {
    rounds: [],
    round: 1,
    clubNames: [],
    matches: [],
    selectOptions: [],
    clubsStatistics: []
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case (actions.GOT_DATA):
            return {
                ...state,
                rounds: action.data.rounds,
                matches: action.data.matches,
                clubNames: action.data.clubNames,
                selectOptions: action.data.selectOptions,
                clubsStatistics: action.data.clubsStatistics
            };
        case (actions.CHANGED_ROUND):
            const parsedMatches = parseMatchesForRound(state.rounds[action.nextRound - 1]);
            const currentRounds = state.rounds.slice(0, action.nextRound);
            const newStatistics = createStatistics(currentRounds, state.clubNames);
            return {
                ...state,
                round: action.nextRound,
                matches: parsedMatches,
                clubsStatistics: newStatistics
            };
        default:
            return state;
    }

};

export default reducer;