import fs from 'fs'
import http from 'http'
import url from 'url'

import React from 'react'
import { Provider } from 'react-redux'
import { navigate } from 'redux-routing'

import configureRouter from './lib/configureRouter'
import configureStore from './lib/configureStore'
import Root from './lib/Root'

const server = http.createServer((req, res) => {
  if (req.method === 'GET') {
    const location = url.parse(req.url)

    if (location.pathname === '/bundle.js') {
      res.setHeader('content-type', 'application/javascript');
      fs.createReadStream(__dirname + '/public/bundle.js').pipe(res);
      return
    }

    const router = configureRouter()
    const store = configureStore(router)

    store.dispatch(navigate(location))
    const state = JSON.stringify(store.getState())

    const html = React.renderToString(<Provider store={store}>
      {() => <Root router={router} />}
    </Provider>)

    const doc = `<!doctype html>
      <html>
        <body>
          <div id="root">${html}</div>
          <script>window._state = ${state}</script>
          <script src="/bundle.js"></script>
        </body>
      </html>`

    res.setHeader('content-type', 'text/html')
    res.end(doc)
  }
})

server.listen(8000)
console.log('listening on http://0.0.0.0:8000')
