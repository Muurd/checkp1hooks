import logo from './logo.svg';
import './App.css';
import Search from './components/Moviesearch';
import Moviecard from './components/Moviecard';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Homepage from './pages/Homepage';
import Trailerpage from './pages/Trailerpage';
import movies from './components/Movielist';


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/home' element={<Homepage movies={movies}/>}/>
      <Route path='/Trailer/:id' element={<Trailerpage movie={movies}/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
