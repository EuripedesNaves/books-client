
import './App.css';
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home';
import Register from './pages/Register';
import { Books } from './components/Books'
import BookAdd from './pages/BookAdd';



function App() {
  return (
    <div className="App">

      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/add' element={<BookAdd/>}/>
        <Route path='/book' element={<Books/>}/>
        <Route path='/register' element={<Register/>}/>
      </Routes>

    </div>
  );
}

export default App;
