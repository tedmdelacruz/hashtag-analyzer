import React, { Component } from 'react'
import { Tweet } from './Tweet'

class Spinner extends Component {
    render() {
        return (
            <div className="spinner">
                <i className="fa fa-circle-o-notch fa-spin fa-3x fa-fw"></i>
            </div>
        )
    }
}

export class TwitterFeed extends Component {

    componentWillMount() {
        const { fetchData, query } = this.props
        fetchData(query)
    }

    render() {
        const { tweets, query, isFetching, isAnalyzing } = this.props

        return (
            <div className="app-panel-inner">
                <div className="app-panel-heading">
                    <h3>Hashtag Sentiment Analyzer</h3>
                    <hr/>
                    <h4>#{ query }</h4>
                </div>

                { isFetching ? <Spinner /> : null }

                <div className="app-panel-body">
                    <div className="tweet-list">
                        { tweets.map((tweet, index) => {
                            return <Tweet data={ tweet } key={ index } />
                        }) }
                    </div>
                </div>
            </div>
        )
    }
}
