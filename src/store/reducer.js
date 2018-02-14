import {createStatistics, parseMatchesForRound} from "../helpers/helper";
import * as actions from '../store/actions';

const initialState = {
    rounds: [],
    round: 1,
    matches: [],
    selectOptions: [],
    clubsStatistics: []
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case (actions.GOT_DATA):
            return {
                ...state,
                rounds: action.payload.rounds,
                matches: action.payload.matches,
                selectOptions: action.payload.selectOptions,
                clubsStatistics: action.payload.clubsStatistics
            };
        case (actions.CHANGED_ROUND):
            const parsedMatches = parseMatchesForRound(state.rounds[action.payload - 1]);
            const currentRounds = state.rounds.slice(0, action.payload);
            const newStatistics = createStatistics(currentRounds);
            debugger;
            return {
                ...state,
                round: action.payload,
                matches: parsedMatches,
                clubsStatistics: newStatistics
            };
        default:
            return state;
    }

};

export default reducer;