import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Utils from '../utils/Utils';


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

    <div>
      <h1>Books</h1>
      {bookList.map((book) => {
        return (
            <Link to={`/updateBook/${book._id}`} key={(book._id)} >
            <img src={book.coverImage} alt={"Cover"} style={{ width: '10vw' }} />
            <span>{book.title}</span>
            <button onClick={() => deleteOneBook(book._id)}>X</button>
            </Link>
        )
      })}

    </div>
  )
}

export default Books