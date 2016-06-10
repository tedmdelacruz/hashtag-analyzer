import { connect } from 'react-redux'
import { fetchTwitterAPI } from './actions'
import * as components from './components'

export const TwitterFeed = connect(
    function mapStateToProps(state) {
        return state
    },
    function mapDispachToProps(dispatch) {
        return {
            fetchData: (query) => dispatch(fetchTwitterAPI(query))
        }
    }
)(components.TwitterFeed)

export const Analysis = connect(
    function mapStateToProps(state) {
        return state
    }
)(components.Analysis)
