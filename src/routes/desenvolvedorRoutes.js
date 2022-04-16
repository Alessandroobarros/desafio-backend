import express from 'express'
import desenvolvedorController from '../controllers/desenvolvedor/index.js'

const router = express.Router()

router
.post('/desenvolvedor', desenvolvedorController.create)

.get('/desenvolvedor', desenvolvedorController.findAll)

.get('/desenvolvedor/:id', desenvolvedorController.findById)

.patch('/desenvolvedor/:id', desenvolvedorController.edit)

.delete('/desenvolvedor/:id', desenvolvedorController.remove)

export default router
