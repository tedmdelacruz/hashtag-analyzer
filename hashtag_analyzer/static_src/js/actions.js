import axios from 'axios'

export const REQUEST_TWITTER_API = 'REQUEST_TWITTER_API'
function requestTwitterAPI() {
    return {
        type: REQUEST_TWITTER_API 
    }
}

export const RECEIVE_TWITTER_API = 'RECEIVE_TWITTER_API'
function receiveTwitterAPI(data) {
    return {
        type: RECEIVE_TWITTER_API,
        data 
    }
}

export const REQUEST_ALCHEMY_API = 'REQUEST_ALCHEMY_API'
function requestAlchemyAPI(data) {
    return {
        type: REQUEST_ALCHEMY_API,
        data 
    }
}

export const RECEIVE_ALCHEMY_API = 'RECEIVE_ALCHEMY_API'
function receiveAlchemyAPI(data) {
    return {
        type: RECEIVE_ALCHEMY_API,
        data 
    }
}

export const FETCH_ALCHEMY_API = 'FETCH_ALCHEMY_API'
function fetchAlchemyAPI(data) {
    return dispatch => {
        dispatch(requestAlchemyAPI(data))
        // return axios.get(...)
    }
}

export const FETCH_TWITTER_API = 'FETCH_TWITTER_API'
export function fetchTwitterAPI(query) {
    return dispatch => {
        dispatch(requestTwitterAPI())
        return axios.get(`/get_tweets/${query}`)
            .then(response => {
                dispatch(receiveTwitterAPI(response.data.statuses))
                dispatch(fetchAlchemyAPI(response.data.statuses))
            })
    }
}

