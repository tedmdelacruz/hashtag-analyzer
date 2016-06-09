import React, { Component } from 'react'

export class Tweet extends Component {
    render() {
        const { user, text, created_at } = this.props.data

        return (
            <div className="tweet">
                <div className="tweet-heading">
                    <a href="#">{ user.name }</a> <small className="tweet-details text-muted">{ created_at }</small>
                </div>
                <div className="tweet-content">{ text }</div>
            </div>
        )
    }
}
