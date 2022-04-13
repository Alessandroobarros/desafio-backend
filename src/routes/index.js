import express from 'express'
import niveis from './niveisRoutes.js'
import desenvolvedores from './desenvolvedorRoutes.js'


const routes = (app) => {
  app.route('/status').get((req,res) => {
    res.status(200).send('Servidor rodando !!!!') // OK !!
  })

  app.use(
    express.json(),
    niveis,
    desenvolvedores
  )
}
export default routes
