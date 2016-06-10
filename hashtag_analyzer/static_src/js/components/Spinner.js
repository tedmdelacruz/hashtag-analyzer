import React, { Component } from 'react'

export class Spinner extends Component {
    constructor(props) {
        super(props)
        this.defaultProps = { type: 'notch', msg: null }
    }

    render() {
        let message = ''
        const { type, msg } = this.props
        const spinnerClass = (type === 'gear')
            ? "fa fa-cog fa-spin fa-3x fa-fw"
            : "fa fa-circle-o-notch fa-spin fa-3x fa-fw"

        if (msg) {
            message = <p class="spinner-msg">{ msg }</p>
        }

        return (
            <div className="spinner">
                { message }
                <i className={ spinnerClass }></i>
            </div>
        )
    }
}