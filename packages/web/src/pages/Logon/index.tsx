import React, { useState, FormEvent } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { FiLogIn } from 'react-icons/fi'

import api from '../../services/api'

import './styles.css'

import logoImg from '../../assets/logoBeTheHero.svg'
import heroesImg from '../../assets/heroes.png'

export default function Logon() {
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const history = useHistory()

	async function handleLogin(event: FormEvent) {
		event.preventDefault()

		const credential = {email, password}

		try {
			const response = await api.post('signIn', credential)
			localStorage.setItem('user_data', JSON.stringify(response.data))

			history.push('/profile')

		} catch (err) {
			alert('Falha no login, tente novamente.')
		}
	}

	return (
		<div className="logon-container">
			<section className="form">
				<img src={logoImg} alt="Meu Patinha" />

				<form onSubmit={handleLogin}>
					<h1>Faça seu logon</h1>

					<input
						placeholder="Seu E-mail"
						value={email}
						onChange={e => setEmail(e.target.value)}
					/>

					<input
						placeholder="Sua Senha"
						value={password}
						onChange={e => setPassword(e.target.value)}
						type="password"						
					/>

					<button className="button" type="submit">Entrar</button>

					<Link className="back-link" to="/register">
						<FiLogIn size={16} color="#E02041" />
						Não tenho cadastro
					</Link>
				</form>
			</section>

			<img src={heroesImg} alt="Heroes" />
		</div>
	);
}
