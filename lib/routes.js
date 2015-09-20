import { route } from 'redux-routing'
import Handler from './Handler'

const routes = [
  route('/', Handler),
  route('/foo', Handler),
  route('/foo/:bar', Handler)
]

export default routes
