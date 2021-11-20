import logo from './logo.svg';
import './App.css';

import {app,db} from './firebase/index'

function App() {
  console.log(db);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
          
          HEHEHEH
          
        </a>
      </header>
    </div>
  );
}

export default App;
