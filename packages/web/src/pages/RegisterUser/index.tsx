import React, { useState, FormEvent } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { FiArrowLeft } from 'react-icons/fi'

import api from '../../services/api'
import './styles.css'

import logoImg from '../../assets/logoBeTheHero.svg'

export default function RegisterUser() {
	const [name, setName] = useState('')
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [passwordConf, setPasswordConf] = useState('')
	const [city, setCity] = useState('')
	const [uf, setUf] = useState('')

	const history = useHistory()

	async function handleRegister(event: FormEvent) {
		event.preventDefault()

		if ( password != passwordConf ) {
			alert('Erro no cadastro, as senhas não estão iguais')
			return
		}

		const data = {
			name,
			email,
			password,
			city,
			uf,
		}

		try {
			const response = await api.post('users', data)
			localStorage.setItem('user_data', JSON.stringify(response.data))

			history.push('/profile')
			
		} catch (err) {
			alert('Erro no cadastro, tente novamente.')
		}
	}

	return (
		<div className="register-container">
			<div className="content">
				<section>
					<img src={logoImg} alt="Be The Hero" />

					<h1>Cadastro</h1>
					<p>Faça seu cadastro, entre na plataforma e ajude pessoas a encontrarem o seu patinha.</p>

					<Link className="back-link" to="/">
						<FiArrowLeft size={16} color="#E02041" />
						Já tenho cadastro
					</Link>
				</section>

				<form onSubmit={handleRegister}>
					<input
						placeholder="Nome da Intituição"
						value={name}
						onChange={e => setName(e.target.value)}
					/>

					<input
						type="email"
						placeholder="E-mail"
						value={email}
						onChange={e => setEmail(e.target.value)}
						/>

					<input
						placeholder="Senha"
						value={password}
						onChange={e => setPassword(e.target.value)}
						type="password"
						/>

					<input
						placeholder="Confirmar Senha"
						value={passwordConf}
						onChange={e => setPasswordConf(e.target.value)}
						type="password"
					/>

					<div className="input-group">
						<input
							placeholder="Cidade"
							value={city}
							onChange={e => setCity(e.target.value)}
						/>

						<input
							placeholder="UF"
							style={{ width: 80 }}
							value={uf}
							onChange={e => setUf(e.target.value)}
						/>
					</div>

					<button className="button" type="submit">Cadastrar</button>
				</form>
			</div>
		</div>
	)
}