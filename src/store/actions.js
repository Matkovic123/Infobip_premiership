export const GOT_DATA = 'GOT_DATA';
export const CHANGED_ROUND = 'CHANGED_ROUND';

// Action creators
export const gotData = data => {
    return {
        type: GOT_DATA,
        data: data
    };
};

export const changedRound = nextRound => {
    return {
        type: CHANGED_ROUND,
        nextRound: nextRound
    };
};