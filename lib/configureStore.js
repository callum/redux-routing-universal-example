import { applyMiddleware, createStore } from 'redux'
import { createMiddleware, reducer } from 'redux-routing'

export default function configureStore (router) {
  const middleware = createMiddleware(router)
  const createStoreWithMiddleware = applyMiddleware(middleware)(createStore)

  return createStoreWithMiddleware(reducer)
}
