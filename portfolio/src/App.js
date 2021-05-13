import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Box, Grid } from '@material-ui/core';

import Navbar from './components/view/layouts/Navbar'

import Home from './components/view/Home'

function App() {
  return (
    <>
      <Router>
          <Box className="App">
              <Navbar />
              <Grid container spacing={1}>
                <Grid item xs={12}>
                  <Home/>
                </Grid>
              </Grid>
          </Box>
         
      </Router>
    </>
  //   <div className="App">
  //     <header className="App-header">
  //       <img src={logo} className="App-logo" alt="logo" />
  //       <p>
  //         Edit <code>src/App.js</code> and save to reload.
  //       </p>
  //       <a
  //         className="App-link"
  //         href="https://reactjs.org"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         Learn React
  //       </a>
  //     </header>
  //   </div>
  );
}

export default App;
