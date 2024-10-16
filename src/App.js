import Home  from './Components/Home';
import './App.css';
import Features from './Components/Features';
import AboutUs from './Components/AboutUs';
import Tokenomics from './Components/Tokenomics';

function App() {
  return (
    <div className="App">
      <div id='sectionHome'><Home /></div>
      <div id='sectionFeatures'><Features /></div>
      <div id='sectionAbout'><AboutUs /></div>
      <div id='sectionToken'><Tokenomics /></div>
    </div>
  );
}

export default App;
