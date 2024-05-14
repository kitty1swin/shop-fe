import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';

import Header from './components/Header'; 
import Footer from './components/Footer';

function App() {
  return (
    <React.Fragment>
      <CssBaseline />
      <div className="wrapper">
        <Header/>
        <Footer/>
      </div>
    </React.Fragment>
  );
}

export default App;
