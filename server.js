const http = require('http')

const PORT = process.env.PORT || 3000

const server = http.createServer((req, res) => {
  if (req.url === '/') return respondHello(req, res)
  if (req.url === '/user-agent') return respondUserAgent(req, res)
  res.end()
})

function respondBase64 (req, res) {
  
}

console.log(`Server listening on port ${PORT}`)

if (require.main !== module) module.exports = server