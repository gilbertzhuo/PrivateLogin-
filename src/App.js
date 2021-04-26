import React, {useState} from 'react';
import Login from './components/login';
import Form from './components/form';
import "./App.scss";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <>
    
      {isAuthenticated ? (<Form setIsAuthenticated={setIsAuthenticated}/>):(<Login setIsAuthenticated={setIsAuthenticated}/>) }
    </>
  );
}

export default App;




