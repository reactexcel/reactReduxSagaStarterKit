import React from 'react'
import ReactDOM from 'react-dom'
import createStore from './store/createStore'
import './styles/main.scss'

const store = createStore(window.__INITIAL_STATE__)

const MOUNT_NODE = document.getElementById('app')

let render = () => {
  const App = require('./routes/index').default

  ReactDOM.render(<App store={store} />, MOUNT_NODE)
}

if (__DEV__) {
  if (module.hot) {
    const renderApp = render
    const renderError = (error) => {
      const RedBox = require('redbox-react').default

      ReactDOM.render(<RedBox error={error} />, MOUNT_NODE)
    }

    render = () => {
      try {
        renderApp()
      } catch (e) {
        console.error(e)
        renderError(e)
      }
    }

    module.hot.accept([
      './routes/index'
    ], () =>
      setImmediate(() => {
        ReactDOM.unmountComponentAtNode(MOUNT_NODE)
        render()
      })
    )
  }
}

if (!__TEST__) render()
