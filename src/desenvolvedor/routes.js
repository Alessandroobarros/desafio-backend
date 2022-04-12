const { create, edit, findById, remove, findAll } = require('../desenvolvedor/controllers')

routes.post('/desenvolvedor', create) //Cadastrar um desenvolvedor

routes.get('/desenvolvedor', findAll) //Listar desenvolvedor existente

routes.get('/desenvolvedor:idDev', findById) //Listar desenvolvedor existente

routes.patch('/desenvolvedor:desenvolvedor', edit) //Editar um desenvolvedor

routes.delete('/desenvolvedor:desenvolvedor', remove) //Remover um desenvolvedor

module.exports = routes
