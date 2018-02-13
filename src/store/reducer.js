import {parseMatchesForRound} from "../helpers/helper";
import * as actions from '../store/actions';
const initialState = {
        rounds: [],
        //TODO: postaviti ovaj broj dinamički
        round: 38,
        matches: [],
        selectOptions: []
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case (actions.GOT_DATA):
            return {
                ...state,
                rounds: action.payload.rounds,
                matches: action.payload.matches,
                selectOptions: action.payload.selectOptions
            };
        case (actions.CHANGED_ROUND):
            const parsedMatches = parseMatchesForRound(state.rounds[action.payload - 1]);
            return {
                ...state,
                round: action.payload,
                matches: parsedMatches
            };
        default: return state;
    }

};

export default reducer;