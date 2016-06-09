import { RETRIEVE_DATA, RECEIVE_DATA } from './actions'

export function reducer(state = {
    tweets: [],
    isFetching: false,
    isAnalyzing: false,
}, action) {
    switch(action.type) {
        case RETRIEVE_DATA:
            return Object.assign({}, state, {
                isFetching: true
            })
        case RECEIVE_DATA:
            return Object.assign({}, state, {
                isFetching: false,
                tweets: action.tweets
            })
        default:
            return state
    }
}
