import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";

import { Header } from "./containers/Header";
import { Footer } from "./containers/Footer";
import { Products } from "./containers/Products";
import { DescriptionsBlock } from "./containers/DescriptonsBlock";

import { Provider } from "react-redux";
import { store } from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <CssBaseline />
      <div className="wrapper">
        <Header />
        <DescriptionsBlock />
        <Products />
        <Footer />
      </div>
    </Provider>
  );
}

export default App;
