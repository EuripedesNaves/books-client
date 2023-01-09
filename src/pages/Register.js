import React, { useState } from 'react'
import Utils from '../utils/Utils';
import { useNavigate, Link } from 'react-router-dom';
import '../Style/Register.css'

export const Register = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
          const user =  await Utils.register(
                {
                    name,
                    email,
                    password
                })
                navigate('/')
                console.log(name, email, password)
                console.log(user, "account created")
        } catch (error) {
            console.log(error)
        }
        setName('')
        setEmail('')
        setPassword('')
    }   

    return (
        <div className='home'>
        <nav className='navbar'>
        <Link to={`/book`}>
        <h3>
          Books App
        </h3>
        </Link>
        </nav>
        <h1>Crie sua conta</h1>
        <form className='form-box' onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder='Qual seu nome?'
                name='Name' value={name}
                onChange={(e) => setName(e.target.value)} />
            <input
                type="email"
                placeholder='Qual seu email?'
                name='email'
                value={email}
                onChange={(e) => setEmail(e.target.value)} />
            <input
                type="password"
                placeholder='Digite uma senha?'
                name='Password' value={password}
                onChange={(e) => setPassword(e.target.value)} />

            <button className='btn-register' type='submit'>Register</button>
        </form>
        </div>
    )
}

export default Register;