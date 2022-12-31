const PORT = 9000
const express = require('express')
const app = express()
const cors = require('cors')

app.use(cors())

const regioni = require('./regioni.json')
const province = require('./province.json')
const comuni = require('./comuni.json')

app.get('/', (req, res) => {
    res.json('Api per Regioni, Province, Comuni attiva')
})

app.get('/regioni', (req, res) => {
    res.json(regioni)
})
app.get('/province', (req, res) => {
    res.json(province)
})
app.get('/comuni', (req, res) => {
    res.json(comuni)
})

app.listen(PORT, () => console.log(`server running on http://localhost:${PORT}`))
