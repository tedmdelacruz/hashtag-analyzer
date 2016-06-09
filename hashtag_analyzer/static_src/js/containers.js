import { connect } from 'react-redux'
import { fetchData } from './actions'
import * as components from './components/TwitterFeed'

export const TwitterFeed = connect(
    function mapStateToProps(state) {
        return state
    },
    function mapDispachToProps(dispatch) {
        return {
            fetchData: (query) => dispatch(fetchData(query))
        }
    }
)(components.TwitterFeed)
