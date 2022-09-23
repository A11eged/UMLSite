import './App.css';
import Hero from './Components/Hero/Hero';
import About from './Components/About/About';
import Nav from './Components/UI/NavBar/Regular/RegularNavBar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Nav></Nav>
      <Routes>
        <Route exact path="/" element={<Hero />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
