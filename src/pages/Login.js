import React, { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom';
import Utils from '../utils/Utils';

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

        <form onSubmit={handleSubmit}>
            <input
                type="email"
                placeholder='email'
                name='email'
                value={email}
                onChange={(e) => setEmail(e.target.value)} />
            <input
                type="password"
                placeholder='password'
                name='Password' value={password}
                onChange={(e) => setPassword(e.target.value)} />

            <button className='btn-login' type='submit'>Login</button>
            <p>Não possui uma conta?<Link to='/register'><span>Register</span></Link></p>
        </form>
    )
}

export default Login
