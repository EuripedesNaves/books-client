import { useState, useEffect } from "react";
import Utils from '../utils/Utils';

export const Books = ({_id}) => {
    
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
                    <div key={book._id} className='todo-list'>
                        <div className='todo-list-item'>
                            <span>{book.title}</span>
                            <div className='btn-todo-list'>
                                <button onClick={() => deleteOneBook(book._id)}>X</button>
                            </div>
                        </div>
                    </div>
                )
            })}

        </div>
    )
}

export default Books