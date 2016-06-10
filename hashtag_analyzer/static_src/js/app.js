import React, { Component } from 'react'
import { render } from 'react-dom'
import thunkMiddleware from 'redux-thunk'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'

import { reducer } from './reducer'
import { TwitterFeed, Analysis } from './containers'

const TwitterFeedEl = document.getElementById('twitter-feed')
const AnalysisEl = document.getElementById('analysis')
const query = TwitterFeedEl.dataset.query

const store = createStore(
    reducer,
    applyMiddleware(thunkMiddleware)
)

render(
    <Provider store={ store }>
        <TwitterFeed query={ query }/>
    </Provider>,
    TwitterFeedEl
)

render(
    <Provider store={ store }>
        <Analysis/>
    </Provider>,
   AnalysisEl
)
