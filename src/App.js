import React, {useState} from 'react';
import Login from './components/login';
import Form from './components/form';
import "./App.scss";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <>
    <h1>hello world</h1>
      {isAuthenticated ? (<Form setIsAuthenticated={setIsAuthenticated}/>):(<Login setIsAuthenticated={setIsAuthenticated}/>) }
    </>
  );
}

export default App;
