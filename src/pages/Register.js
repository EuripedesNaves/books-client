import React, { useState } from 'react'
import Utils from '../utils/Utils';
import { useNavigate } from 'react-router-dom';

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

        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder='name'
                name='Name' value={name}
                onChange={(e) => setName(e.target.value)} />
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

            <button className='btn-login' type='submit'>Register</button>
        </form>
    )
}

export default Register;