import React, { Component } from 'react'
import { Spinner } from './'

export class AnalysisContainer extends Component {
    render() {
        const { isAnalyzing, data } = this.props

        return (
            <div>
                { isAnalyzing ? <Spinner type="gear" msg="Analyzing..." /> : null }
            </div>
        )
    }
}
