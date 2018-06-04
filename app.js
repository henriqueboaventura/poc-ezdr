const express = require('express')
const app = express()
const path = require('path')

app.use(express.static('assets'))

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname+'/pages/home.html'));
})

app.get('/version', (req, res) => {
    res.json({'version': '1.0.0'})
})

app.get('/health-check', (req, res) => {
    res.sendFile(path.join(__dirname+'/pages/health-check.html'));
})

app.listen(3000, () => console.log('Example app listening on port 3000!'))
