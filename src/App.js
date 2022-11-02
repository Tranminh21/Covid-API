import logo from './logo.svg';
import './App.css';
import Covid from './Component/Covid';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Covid Germany </h1>
        <Covid/>
      </header>
    </div>
  );
}

export default App;
