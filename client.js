import React from 'react'
import { Provider } from 'react-redux'
import { History, navigate } from 'redux-routing'

import configureStore from './lib/configureStore'
import Root from './lib/Root'

const store = configureStore(window._state, History)

store.dispatch(navigate(window._state.href))

React.render(<Provider store={store}>
  {() => <Root />}
</Provider>, document.getElementById('root'))
