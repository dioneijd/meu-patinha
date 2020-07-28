import express from 'express'

import SessionController from './controllers/SessionController'
import OngController from './controllers/OngController'
import UserController from './controllers/UserController'
import AnimalsController from './controllers/AnimalsController'

const routes = express.Router()

const sessionController = new SessionController()
const ongController = new OngController()
const userController = new UserController()
const animalsController = new AnimalsController()

routes.post('/signIn', sessionController.singIn)



routes.get('/ongs', ongController.index)
//routes.get('/ongs/:id', ongController.show)
routes.post('/ongs', ongController.store)
//routes.put('/ongs/:id', ongController.update)

routes.get('/users', userController.index)
//routes.get('/users/:id', userController.show)
routes.post('/users', userController.store)
//routes.put('/users/:id', userController.update)

routes.get('/animals', animalsController.index)
//routes.get('/animals/:id', animalsController.show)
routes.post('/animals', animalsController.store)
//routes.put('/animals/:id', animalsController.update)
routes.delete('/animals/:idAnimal', animalsController.destroy)


export default routes