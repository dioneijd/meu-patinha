import React, { useState, useEffect, FormEvent } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { FiPower, FiTrash2 } from 'react-icons/fi'

import api from '../../services/api'

import './styles.css'

import logoImg from '../../assets/logoBeTheHero.svg'


interface AnimalInterface {
	idAnimal: string
	name: string
	description: string
}


export default function ProfileOng() {
	const [animals, setAnimals] = useState<AnimalInterface[]>([])
	const [idOng, setIdOng] = useState('')
	const [ongName, setOngName] = useState('')

	const history = useHistory()



	useEffect(() => {
		const userData = JSON.parse( localStorage.getItem('user_data') || '{}' )
	
		setIdOng(userData.idOng)	
		setOngName(userData.name)

	}, [])


	useEffect(() => {
		if (idOng != '') getAnimals()
							
		async function getAnimals(){			
			const response = await api.get(`/animals?limitResult=10000&idOng=${idOng}`)

			if (response){
				setAnimals(response.data)
			}
		}

	}, [idOng])

	async function handleDeleteIncident(idAnimal:string) {
		try {
			const response = await api.delete(`animals/${idAnimal}`, {
				headers: {
					Authorization: idOng,
				}
			})
			
			setAnimals(animals.filter(animals => animals.idAnimal !== idAnimal))
		} catch (err) {
			alert('Erro ao deletar caso, tente novamente.')
		}
	}

	function handleLogout() {
		localStorage.clear()

		history.push('/')
	}

	return (
		<div className="profile-container">
			<header>
				<img src={logoImg} alt="Be the Hero" />
				<span>Bem vinda, {ongName}</span>

				<Link className="button" to="/incidents/new">Cadastrar novo patinha</Link>
				<button onClick={handleLogout} type="button">
					<FiPower size={18} color="#E02041" />
				</button>
			</header>

			<h1>Patinhas</h1>

			<ul>
				{animals.map(animal => (
					<li key={animal.idAnimal}>
						<strong>Nome:</strong>
						<p>{animal.name}</p>

						<strong>Descrição:</strong>
						<p>{animal.description}</p>

						<button onClick={() => handleDeleteIncident(animal.idAnimal)} type="button">
							<FiTrash2 size={20} color="#a8a8b3" />
						</button>
					</li>
				))}
			</ul>
		</div>
	)
}