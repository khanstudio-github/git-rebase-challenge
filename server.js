const http = require('http')

const PORT = process.env.PORT || 3000

const server = http.createServer((req, res) => {
})

function respondHello (req, res) {
}


console.log(`Server listening on port ${PORT}`)

if (require.main !== module) module.exports = server