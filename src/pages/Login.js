import React, { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom';
import Utils from '../utils/Utils';
import '../Style/Login.css'


export const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            await Utils.login(
                {
                    email,
                    password
                })
            navigate('/book')
            console.log('Login success')
        } catch (error) {
            console.log(error)
        }
        setEmail('')
        setPassword('')
    }

    return (
        <div className='home'>
        <nav className='navbar'>
        <h3>
          Books App
        </h3>
        </nav>
            <h1>Entre na sua conta</h1>
            <form className='form-box' onSubmit={handleSubmit}>
                <input
                    type="email"
                    placeholder='Qual seu e-mail?'
                    name='email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)} />
                <input
                    type="password"
                    placeholder='Qual sua senha?'
                    name='Password' value={password}
                    onChange={(e) => setPassword(e.target.value)} />

                <button className='btn-login' type='submit'>Login</button>
                <p>Não possui uma conta?</p>
                <Link to='/register'><button className='btn-register'> Register</button></Link>
            </form>
        </div>
    )
}

export default Login
