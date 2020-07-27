//const crypto = require('crypto');
import { Request, Response } from 'express'
import crypto from 'crypto'
import connection from '../database/connection'


class OngController {
	async index(request: Request, response: Response) {
		const ongs = await connection('ONGS').select('*')

		return response.json(ongs)
	}

	async store(request: Request, response: Response) {
		const { name, email, password, city, uf, thumbnail } = request.body

		const ong = {
			idOng: crypto.randomBytes(4).toString('hex'),
			name,
			email,
			password,
			city,
			uf,
			thumbnail
		}

		await connection('ONGS').insert( ong )

		return response.json( ong )
	}

}



export default OngController