import { Request, Response } from 'express'
import knex from '../database/connection'


class SessionController {
    async singIn (request: Request, response: Response) {
        const { email, password } = request.body

        const login = await knex('USERS')
                            .where('email', email)
                            .where('password', password)
                            .first()

        if (!login) return response.status(401).json({ message: '(401) Unauthorized' })
        
        delete login.password

        return response.json(login)
        
    }
}

export default SessionController