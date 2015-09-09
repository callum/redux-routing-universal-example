import { Router } from 'redux-routing'
import Handler from './Handler'

export default function createRouter (History) {
  const router = new Router(History)

  router.route('/', Handler)
  router.route('/foo', Handler)
  router.route('/foo/:bar', Handler)

  return router
}
