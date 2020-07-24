import express from 'express'

const routes = express.Router()

routes.get('/', (req:any, res:any) => {
    res.send('HELLO2')
})


export default routes