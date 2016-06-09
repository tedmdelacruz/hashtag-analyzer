import axios from 'axios'

export const RETRIEVE_DATA = 'RETRIEVE_DATA'
function retrieveData() {
    return {
        type: RETRIEVE_DATA
    }
}

export const RECEIVE_DATA = 'RECEIVE_DATA'
function receiveData(tweets) {
    return {
        type: RECEIVE_DATA,
        tweets 
    }
}

export const FETCH_DATA = 'FETCH_DATA'
export function fetchData(query) {
    return dispatch => {
        dispatch(retrieveData())
        return axios.get(`/get_tweets/${query}`)
            .then(response => {
                dispatch(receiveData(response.data.statuses))
            })
    }
}

