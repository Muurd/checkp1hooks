import logo from './logo.svg';
import './App.css';
import Search from './components/Moviesearch';
import Moviecard from './components/Moviecard';


function App() {
  return (
    <div style={{minHeight:"100vh",backgroundImage:"url('./assets/homebg.jpg')", backgroundSize:"cover",backgroundRepeat:"no-repeat"}}>
      <Search/>
    </div>
  );
}

export default App;
