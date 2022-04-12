const Router = require ('express')
const { create, findAll, update, removeById } = require('./controllers')

const routes = Router()

routes.get('/status', (req,res) => res.send('Servidor rodando !!!!'))

routes.get('/niveis', findAll) //Listar niveis existentes OK!!

routes.post('/nivel', create) //Cadastrar um nivel  OK !!

routes.put('/nivel/:id', update) //Editar um nivel OK !!

routes.delete('/nivel/:id', removeById) //Deletar um nivel OK !!


module.exports = routes
