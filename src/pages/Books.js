import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Utils from '../utils/Utils';
import Navbar from "../components/Navbar";

import '../Style/Books.css'

export const Books = ({ _id }) => {

  const [bookList, setBooks] = useState([]);
 

  const allBooks = async () => {
    try {
      const data = await Utils.getBooks();
      setBooks(data)
    } catch (error) {
      console.log(error)
    }
  }

  const deleteOneBook = async (_id) => {
    try {
      await Utils.deleteBook(_id)
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    allBooks()
  }, [])

  return (

    <div >
      <Navbar/>

      <div className="body">
      {bookList.map((book) => {
        return (
          <div className='body-element' key={(book._id)}>
            <img className="imgCover" src={book.coverImage} alt={"Cover"} />
            <p></p>
            <span className="name">{book.title}</span>
            <p></p>
            <Link to={`/updateBook/${book._id}`}>
              <button className="btn-update">Correção</button>
            </Link>
            <Link to={`/bookDetails/${book._id}`}>
              <button className="btn-details">Detalhes</button>
            </Link>
            <button className="btn-delete" onClick={() => deleteOneBook(book._id)}>Deletar</button>
          </div>
        )
      })}
      </div>
    </div>
  )
}

export default Books