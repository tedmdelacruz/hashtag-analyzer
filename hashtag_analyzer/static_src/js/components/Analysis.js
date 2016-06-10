import React, { Component } from 'react'
import { Spinner } from './'

export class Analysis extends Component {
    render() {
        const { isAnalyzing, data, analysisResults } = this.props
        let results = null

        if (analysisResults) {
            results = analysisResults.docSentiment.type === 'positive'
                ? <h2 className="text-primary">Good</h2>
                : <h2 className="text-danger">Bad</h2>
        }

        return (
            <div className="analysis-results">
                { isAnalyzing ? <Spinner type="gear" msg="Analyzing..." /> : null }
                { results }
            </div>
        )
    }
}
