import './App.css';
import Hero from './Components/Hero/Hero';
import Nav from './Components/UI/NavBar/Regular/RegularNavBar';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Nav></Nav>
        <Hero></Hero>
      </div>
    </BrowserRouter>
  );
}

export default App;
