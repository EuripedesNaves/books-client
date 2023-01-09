import React, { useState } from 'react'
import Utils from '../utils/Utils'
import { useNavigate, useParams } from 'react-router-dom'
import '../Style/UpdateBook.css'

export const UpdateBook = () => {

    const [title, setTitle] = useState('')
    const [author, setAuthor] = useState('')
    const [synopsis, setSynopsis] = useState('')
    const [releaseYear, setReleaseYear] = useState('')
    const [genre, setGenre] = useState('')

    const { id } = useParams()
    const navigate = useNavigate()



    const handleUpdateBook = async () => {
        try {
            await Utils.updateBook(id, title, author, synopsis, releaseYear, genre)
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
        <div className='form-box'>
            <h2>Dados para correção</h2>
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
                placeholder='Sinópse'
                value={synopsis}
                onChange={(e) => setSynopsis(e.target.value)} />

            <input
                type="number"
                placeholder='Ano de lançamento (Obrigatório)'
                value={releaseYear}
                onChange={(e) => setReleaseYear(e.target.value)}  />

            <input
                type="text"
                placeholder='Genêro'
                value={genre}
                onChange={(e) => setGenre(e.target.value)} />

            <button className='btn-submit' type='submit' onClick={handleUpdateBook}>Update Livro</button>
        </div>
    )
}

export default UpdateBook