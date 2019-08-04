import React from 'react'
import ReactDom from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'

const store = createStore(reduces, applyMiddleware(thunk))

ReactDom.render(<Provider store={store}><App /></Provider>, document.querySelector('#root'))