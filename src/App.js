import React, {useEffect} from 'react';
import Login from './components/login';
import Form from './components/form';
import "./App.scss";

function App() {
  let auth = localStorage.getItem('auth');
  useEffect(() => {
    auth = localStorage.getItem('auth');
});
  return (
    <>
      {auth === "true" ? (<Form/>):(<Login/>) }
    </>
  );
}

export default App;
