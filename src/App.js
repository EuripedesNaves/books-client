
import './App.css';
import { Route, Routes } from 'react-router-dom'
import Login from './pages/Login'
import Register from './pages/Register';
import Books from './pages/Books';
import BookAdd from './pages/BookAdd';
import ChanceDataBook from './pages/ChangeDataBook';





function App() {
  return (
    <div className="App">

      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/add' element={<BookAdd/>}/>
        <Route path='/book' element={<Books/>}/>
        <Route path='/updateBook/:id' element={<ChanceDataBook/>}/>
      </Routes>

    </div>
  );
}

export default App;
