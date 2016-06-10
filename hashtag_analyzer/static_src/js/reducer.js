import { REQUEST_TWITTER_API, RECEIVE_TWITTER_API, 
    REQUEST_ALCHEMY_API, RECEIVE_ALCHEMY_API } from './actions'

export function reducer(state = {
    data: [],
    analysisResults: null,
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
        case RECEIVE_ALCHEMY_API:
            return Object.assign({}, state, {
                isAnalyzing: false,
                analysisResults: action.response
            })
        default:
            return state
    }
}
