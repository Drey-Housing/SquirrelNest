import React, { useState, useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
// import '../App.css';
import { useWindowSize } from './utils/customHooks';
import NavBar from './components/NavBar';
import authUtils from './utils/authUtils';


function App() {
  const { width } = useWindowSize();
  const [loggedIn, setLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    authUtils.getUser().then((res) => {
      setLoggedIn(res.data.loggedIn);
    });
  }, []);

  return (
    <div className="App">
      <header className="App-header">

        <p>
          SquirrelNest
        </p>
        <a
          className="App-link"

          target="_blank"
          rel="noopener noreferrer"
        >
          Properties Portfolio
        </a>
      </header>
    </div>
  );
}

export default App;
