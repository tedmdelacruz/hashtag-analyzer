import React, { Component } from 'react'
import { Tweet } from './Tweet'

export class TwitterFeed extends Component {

    componentWillMount() {
        const { fetchData, query } = this.props
        fetchData(query)
    }

    render() {
        let { tweets, query, isFetching, isAnalyzing } = this.props

        return (
            <div className="app-panel-inner">
                <div className="app-panel-heading">
                    <h3>Hashtag Sentiment Analyzer</h3>
                    <hr/>
                    <h4>#{ query }</h4>
                    { isFetching ? <p>Searching...</p> : null }
                    { isAnalyzing ? <p>Analyzing...</p> : null }
                </div>

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
