import './App.css';
import { BrowserRouter as Router} from 'react-router-dom';
import { Box, Grid } from '@material-ui/core';

import Navbar from './components/view/layouts/Navbar'

import Home from './components/view/Home'

function App() {
  return (
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
  );
}

export default App;
