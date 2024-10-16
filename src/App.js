import Home  from './Components/Home';
import './App.css';
import Features from './Components/Features';
import AboutUs from './Components/AboutUs';
import Tokenomics from './Components/Tokenomics';

function App() {
  return (
    <div className="App">
      <Home />
      <Features />
      <AboutUs />
      <Tokenomics />
    </div>
  );
}

export default App;
