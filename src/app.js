const express =require('express')
const routes = require ('./niveis/routes')
// const niveis = require ('./niveis/routes')

const app = express()

app.use(express.json())
app.use(routes)
// app.register(niveis, { prefix: '/niveis'})

module.exports = app
