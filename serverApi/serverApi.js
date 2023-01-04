const PORT = 9000
const express = require('express')
const app = express()
const cors = require('cors')

app.use(cors())

const regioni = require('./regioni.json')
const province = require('./province.json')
const comuni = require('./comuni.json')
const imgCani = require('./imgCani.json')

app.get('/', (req, res) => {
    res.json('Api per Regioni, Province, Comuni attiva')
})

app.get('/regioni', (req, res) => {
    res.json(regioni)
})

app.get('/province/:regione/:caratteri?', (req, res) => {
    //let prov;
    !req.params.caratteri ?
        prov = province.filter(provincia => provincia.regione.toLowerCase() === req.params.regione.toLowerCase())
        :
        prov = province.filter(provincia => provincia.regione.toLowerCase() === req.params.regione.toLowerCase()
            && provincia.nome.toLowerCase().includes(req.params.caratteri.toLowerCase()))
    res.json(prov)
})

app.get('/comuni/:provincia/:caratteri?', (req, res) => {
    //let com;
    !req.params.caratteri ?
        com = comuni.filter(comune => comune.provincia.nome.toLowerCase() === req.params.provincia.toLowerCase())
        :
        com = comuni.filter(comune => comune.provincia.nome.toLowerCase() === req.params.provincia.toLowerCase()
            && comune.nome.toLowerCase().includes(req.params.caratteri.toLowerCase()))
    res.json(com)
})

app.get('/randomImg', (req, res) => {
    res.json(imgCani[Math.floor(Math.random() * imgCani.length)])
})

app.listen(PORT, () => console.log(`server running on http://localhost:${PORT}`))
