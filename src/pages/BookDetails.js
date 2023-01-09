import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Utils from '../utils/Utils';
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";

import '../Style/BookDetails.css'

export const BookDetails = () => {
    const { id } = useParams();
    const [book, setBook] = useState("");
    const navigate = useNavigate();


    useEffect(() => {
    const BookDetail = async () => {
      try {
        const data = await Utils.getBook(id);
        setBook(data)
      } catch (error) {
        console.log(error)
      }
    };
    BookDetail()
  },[id])
  
  const deleteOneBook = async (_id) => {
    try {
      await Utils.deleteBook(_id)
      navigate('/book')
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div>
      <Navbar/>
    <h1 className='title'>Detalhe Livro</h1>
    <img className='imgCover' src={book.coverImage} alt={"Cover"} />
    <p></p>
    <span className='book'><b>Título do livro:</b> {book.title}</span>
    <p></p>
    <span className='author'><b>Autor:</b> {book.author}</span>
    <p></p>
    <span className='release'><b>Ano de lançamento:</b> {book.releaseYear}</span>
    <p></p>
    <span className='genre'><b>Gênero:</b> {book.genre}</span>
    <p></p>
    <span className='sinopsys'><b>Sinopse:</b> {book.synopsis}</span>
    <p></p>
    <button className="btn-delete" onClick={() => deleteOneBook(book._id)}>Delete</button>
    </div>
    
  )
}

export default BookDetails;
