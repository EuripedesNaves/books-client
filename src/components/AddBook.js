import React, { useState } from 'react'
import Utils from '../utils/Utils'

export const AddBook = () => {

    const [title, setTitle] = useState('')
    const [author, setAuthor] = useState('')
    const [synopsis, setSynopsis] = useState('')
    const [releaseYear, setReleaseYear] = useState('')
    const [genre, setGenre] = useState('')


    const handleAddBook = async () => {
        try {
            await Utils.addBook(title, author, synopsis, releaseYear, genre)
            setTitle('')
            setAuthor('')
            setSynopsis('')
            setReleaseYear('')
            setGenre('')
            console.log('Completed')
        } catch (error) {
            console.log(error, `Could not add a new Todo`)
        }
    }


    return (
        <div className='form'>
            <input
                type="text"
                placeholder='Título do livro'
                value={title}
                onChange={(e) => setTitle(e.target.value)} />

            <input
                type="text"
                placeholder='Autor'
                value={author}
                onChange={(e) => setAuthor(e.target.value)} />

            <input
                type="text"
                placeholder='Sinópse'
                value={synopsis}
                onChange={(e) => setSynopsis(e.target.value)} />

            <input
                type="number"
                placeholder='Ano de lançamento'
                value={releaseYear}
                onChange={(e) => setReleaseYear(e.target.value)}  />

            <input
                type="text"
                placeholder='Genêro'
                value={genre}
                onChange={(e) => setGenre(e.target.value)} />



            <button type='submit' onClick={handleAddBook}>Add Livro</button>
        </div>
    )
}

export default AddBook