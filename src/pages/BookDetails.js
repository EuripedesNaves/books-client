import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Utils from '../utils/Utils';

export const BookDetails = () => {
    const { id } = useParams();
    const [book, setBook] = useState("");

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


  return (
    <div>
    <h1>Detalhe Livro</h1>
    <img src={book.coverImage} alt={"Cover"} style={{ width: '10vw' }} />
    
    <span>{book.title}</span>
    <span>{book.author}</span>
    <span>{book.synopsis}</span>
    <span>{book.releaseYear}</span>
    <span>{book.genre}</span>


    </div>
  )
}

export default BookDetails;
