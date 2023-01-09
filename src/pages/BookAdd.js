import React, { useState } from 'react'
import Utils from '../utils/Utils'
import { useNavigate } from 'react-router-dom'
import Navbar from "../components/Navbar";

import '../Style/BookAdd.css'

export const BookAdd = () => {

    const [title, setTitle] = useState('')
    const [author, setAuthor] = useState('')
    const [synopsis, setSynopsis] = useState('')
    const [releaseYear, setReleaseYear] = useState('')
    const [genre, setGenre] = useState('')

    const navigate = useNavigate();


    const handleAddBook = async () => {
        try {
            await Utils.addBook(title, author, synopsis, releaseYear, genre)
            setTitle('')
            setAuthor('')
            setSynopsis('')
            setReleaseYear('')
            setGenre('')
            navigate('/book')
            console.log('Completed')
        } catch (error) {
            console.log(error)
        }
    }


    return (
        <div>
            <Navbar/>
            <div className='form-box'>
                <h2>Dados do livro</h2>
                <input
                    type="text"
                    placeholder='Título do livro (Obrigatório)'
                    value={title}
                    onChange={(e) => setTitle(e.target.value)} />
                <input
                    type="text"
                    placeholder='Autor (Obrigatório)'
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)} />
                <input
                    type="text"
                    placeholder='Sinopse'
                    value={synopsis}
                    onChange={(e) => setSynopsis(e.target.value)} />
                <input
                    type="number"
                    placeholder='Ano de lançamento (Obrigatório)'
                    value={releaseYear}
                    onChange={(e) => setReleaseYear(e.target.value)} />
                <input
                    type="text"
                    placeholder='Genêro'
                    value={genre}
                    onChange={(e) => setGenre(e.target.value)} />

                <button className='btn-submit' type='submit' onClick={handleAddBook}>Add Livro</button>

            </div>
        </div>
    )
}

export default BookAdd