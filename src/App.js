import logo from './logo.svg';
import './App.css';

import {app,db} from './firebase/index';
import Layout from './containers/Layout';

function App() {
  console.log(db);
  return (
      <Layout />
  );
}

export default App;
