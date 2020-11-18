const express = require('express')

const app = express()

app.get('/', (req, res) => res.send('API working!'))

const PORT = process.env.PORT || 3000

app.listen(PORT, () => console.log(`Server now humming along on port ${PORT}`))