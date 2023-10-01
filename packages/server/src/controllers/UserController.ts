//const crypto = require('crypto');
import { Request, Response } from 'express'
import crypto from 'crypto'
import connection from '../database/connection'


class UserController {
	async index(request: Request, response: Response) {
        const users = await connection('USERS').select('*')
        users.forEach(user => {
			delete user.email 
			delete user.password 
		})

		return response.json(users)
	}

	async store(request: Request, response: Response) {
		const { name, email, password, city, uf, thumbnail } = request.body

		const user = {
			idUser: crypto.randomBytes(4).toString('hex'),
			name,
			email,
			password,
			city,
			uf,
			thumbnail
		}

		await connection('USERS').insert( user )

		return response.json( user )
	}

}



export default UserController