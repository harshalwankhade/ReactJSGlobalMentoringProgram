import logo from './logo.svg';
import './App.css';
import Toggle from './Components/Toggle';
//import SearchComponent from './Components/SearchComponent';
//import Counter from './Components/Counter';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Toggle/>
      </header>      
    </div>
  );
}

export default App;
