import logo from './logo.svg';
import './App.css';
import SearchComponent from './Components/SearchComponent';
//import Counter from './Components/Counter';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <SearchComponent/>
      </header>      
    </div>
  );
}

export default App;
