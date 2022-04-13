import express from 'express'
import desenvolvedorController from '../controllers/desenvolvedor/index.js'

const router = express.Router()

router
.post('/desenvolvedor', desenvolvedorController.create) //Cadastrar um desenvolvedor

.get('/desenvolvedor', desenvolvedorController.findAll) //Listar desenvolvedor existente OK!!

.patch('/desenvolvedor/:id', desenvolvedorController.edit) //Editar um desenvolvedor

.delete('/desenvolvedor/:id', desenvolvedorController.remove) //Remover um desenvolvedor

export default router
