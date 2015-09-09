import React from 'react'
import { Provider } from 'react-redux'
import { History, navigate } from 'redux-routing'
import Root from './lib/Root'

import configureRouter from './lib/configureRouter'
import configureStore from './lib/configureStore'

const router = configureRouter(History)
const store = configureStore(router)

store.dispatch(navigate(window._state.location))

React.render(<Provider store={store}>
  {() => <Root router={router} />}
</Provider>, document.getElementById('root'))
