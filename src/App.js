import './App.css';
import Hero from './Components/Hero/Hero';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Hero></Hero>
      </div>
    </BrowserRouter>
  );
}

export default App;
