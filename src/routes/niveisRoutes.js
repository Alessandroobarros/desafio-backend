import Router from 'express'
import niveisController from '../controllers/nivel/index.js'

const router = Router()

router
.get('/nivel', niveisController.findAll)

.get('/nivel/:id', niveisController.findById)

.post('/nivel', niveisController.create)

.put('/nivel/:id', niveisController.update)

.delete('/nivel/:id', niveisController.removeById)


export default router
