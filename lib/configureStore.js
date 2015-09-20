import { applyMiddleware, createStore } from 'redux'
import { History, createMiddleware, reducer } from 'redux-routing'

export default function configureStore (initialState, history) {
  const middleware = createMiddleware(history)
  const createStoreWithMiddleware = applyMiddleware(middleware)(createStore)

  return createStoreWithMiddleware(reducer, initialState)
}
