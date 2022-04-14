import Router from 'express'
import niveisController from '../controllers/nivel/index.js'

const router = Router()

router
.get('/nivel', niveisController.findAll) //Listar niveis existentes OK!!

.get('/nivel/:name', niveisController.findByName) //Listar um nivel por nome OK!!

.post('/nivel', niveisController.create) //Cadastrar um nivel  OK !!

.put('/nivel/:id', niveisController.update) //Editar um nivel OK !!

.delete('/nivel/:id', niveisController.removeById) //Deletar um nivel OK !!


export default router
