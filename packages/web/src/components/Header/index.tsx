import React, {useEffect, useState} from 'react'
import { Link } from 'react-router-dom'

import './style.css'

import logo from '../../assets/logo.svg'

interface LoginSessionInterface {
    idUser: string 
    name: string
    thumbnail: string
}


export default function Header() {   
    const [loginSession, setLoginSession] = useState<LoginSessionInterface>()
    const [showLoginBtn, setShowLoginBtn] = useState(true)

    useEffect(() => {
        const loginSessionString:string = localStorage.getItem('user_data') || '{}'
        setLoginSession(JSON.parse(loginSessionString))
    }, [])

    
    return (
        <header id="main-header">
            <Link to="/">
                <img id="filaFoodLogo" src={logo} alt=""></img>
            </Link>
        
            { loginSession?.idUser != ''
            && 
                <button>FAZER LOGIN</button>
            }

            {/* <Link to="/">
                <img id="customerThumbnail"  src={loginSession?.thumbnail || ''} alt={loginSession?.name}></img>
            </Link> */}
        </header>
    )
}
