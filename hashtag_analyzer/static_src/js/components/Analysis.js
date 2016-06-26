import React, { Component } from 'react'
import { Spinner } from './'

export class Analysis extends Component {
    render() {
        const { isAnalyzing, data, analysisResults } = this.props
        let results = null

        if (analysisResults) {
            results = (
                <div>
                    <h2 className="text-warning">Joy: { analysisResults.docEmotions.joy }</h2>
                    <h2 className="text-primary">Sadness: { analysisResults.docEmotions.sadness }</h2>
                    <h2 className="text-danger">Anger: { analysisResults.docEmotions.anger }</h2>
                    <h2 className="text-muted">Fear: { analysisResults.docEmotions.fear }</h2>
                    <h2 className="text-success">Disgust: { analysisResults.docEmotions.disgust }</h2>
                </div>
            )
        }

        return (
            <div className="analysis-results">
                { isAnalyzing ? <Spinner type="gear" msg="Analyzing..." /> : null }
                { results }
            </div>
        )
    }
}
