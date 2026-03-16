const { FacebookWebSocket } = require('./fb.ws.js')

const state = { ws: null }

const getWebSocketURL = async () => {
  const data = await fetch('http://localhost:9222/json')
  const json = await data.json()
  return json.find((item) => item.url === 'chrome://newtab/')?.webSocketDebuggerUrl
}

getWebSocketURL().then((url) => {
  state.ws = new FacebookWebSocket(url)

  state.ws.on('open', () => {
    console.log('Connected to Facebook WebSocket')
  })
}).catch((err) => console.error(err))
