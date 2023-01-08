import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Utils from '../utils/Utils';
import Navbar from "../components/Navbar";


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
      document.location.reload(true);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    allBooks()
  }, [])

  return (

    <div>
      <Navbar/>
      <h1>Books</h1>
      {bookList.map((book) => {
        return (
          <div key={(book._id)}>
            <img src={book.coverImage} alt={"Cover"} style={{ width: '10vw' }} />
            <span>{book.title}</span>
            <Link to={`/updateBook/${book._id}`}>
              <button>Update</button>
            </Link>
            <Link to={`/bookDetails/${book._id}`}>
              <button>Details</button>
            </Link>
            <button onClick={() => deleteOneBook(book._id)}>Delete</button>

          </div>
        )
      })}

    </div>
  )
}

export default Books