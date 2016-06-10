import React, { Component } from 'react'
import { Tweet, Spinner } from './'

export class TwitterFeed extends Component {

    componentWillMount() {
        const { fetchData, query } = this.props
        fetchData(query)
    }

    render() {
        const { data, query, isFetching } = this.props

        return (
            <div className="app-panel-inner">
                <div className="app-panel-heading">
                    <h3>Hashtag Sentiment Analyzer</h3>
                    <hr/>
                    <h4>#{ query }</h4>
                </div>

                { isFetching ? <Spinner type="notch" msg="Fetching tweets..." /> : null }

                <div className="app-panel-body">
                    <div className="tweet-list">
                        { data.map((tweet, index) => {
                            return <Tweet data={ tweet } key={ index } />
                        }) }
                    </div>
                </div>
            </div>
        )
    }
}
