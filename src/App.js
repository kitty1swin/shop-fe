import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Products from "./containers/Products";
import DescriptionsBlock from "./containers/DescriptonsBlock";

function App() {
  return (
    <React.Fragment>
      <CssBaseline />
      <div className="wrapper">
        <Header />
        <DescriptionsBlock />
        <Products />
        <Footer />
      </div>
    </React.Fragment>
  );
}

export default App;
