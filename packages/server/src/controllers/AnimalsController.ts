import { Request, Response } from 'express'
import connection from '../database/connection'

class AnimalsController {
	async index(request: Request, response: Response) {
		const { limitResult = 5, page = 1, idUser } = request.query

		const [count] = await connection('ANIMALS').count()
        
        const animals = await connection('ANIMALS')
                                .where(builder => {
                                    if (idUser) builder.where('idUser', String(idUser))
                                })
								.limit(Number(limitResult))
								.offset((Number(page) - 1) * Number(limitResult))
                                .orderBy('name')

		response.header('X-Total-Count', count['count(*)'])

		return response.json(animals)
	}

	async store (request: Request, response: Response) {
		const { name, description, idUser } = request.body		

		const animal = {
			name,
			description,
			idUser
		}

		const insertedIds = await connection('ANIMALS').insert(animal)
		const ret = {idAnimal: insertedIds[0], ...animal}
		
		return response.json(ret)
	}

	async destroy (request: Request, response: Response) {
		
        const { idAnimal } = request.params
		const idUser = request.headers.authorization

		const animal = await connection('ANIMALS')
								.where('idAnimal', idAnimal)
								.where('idUser', idUser)								
								.first()

		if (!animal) return response.status(401).json({ error: 'Operation not permitted.' })
		
		await connection('ANIMALS').where('idAnimal', idAnimal).delete()

		return response.json(animal)
	}
}

export default AnimalsController