import React, { Component } from 'react'
import { render } from 'react-dom'
import thunkMiddleware from 'redux-thunk'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'

import { reducer } from './reducer'
import { TwitterFeed, AnalysisContainer } from './containers'

const store = createStore(
    reducer,
    applyMiddleware(thunkMiddleware)
)

const TwitterFeedEl = document.getElementById('twitter-feed')
const AnalysisContainerEl = document.getElementById('analysis-container')
const query = TwitterFeedEl.dataset.query

render(
    <Provider store={ store }>
        <TwitterFeed query={ query }/>
    </Provider>,
    TwitterFeedEl
)

render(
    <Provider store={ store }>
        <AnalysisContainer/>
    </Provider>,
    AnalysisContainerEl
)
