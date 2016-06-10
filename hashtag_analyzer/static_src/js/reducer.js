import { REQUEST_TWITTER_API, RECEIVE_TWITTER_API, 
    REQUEST_ALCHEMY_API } from './actions'

export function reducer(state = {
    data: [],
    isFetching: false,
    isAnalyzing: false,
}, action) {
    switch(action.type) {
        case REQUEST_TWITTER_API:
            return Object.assign({}, state, {
                isFetching: true
            })
        case RECEIVE_TWITTER_API:
            return Object.assign({}, state, {
                isFetching: false,
                data: action.data
            })
        case REQUEST_ALCHEMY_API :
            return Object.assign({}, state, {
                isAnalyzing: true,
                data: action.data
            })
        default:
            return state
    }
}
