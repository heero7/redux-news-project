import React, { Component } from "react";

// in charge of bringing all routes
import { BrowserRouter, Route, Switch } from "react-router-dom";

// COMPONENTS
import Header from "./Header";
import Footer from "./Footer";

// CONTAINERS
import Home from "../containers/Home";
import News from "../containers/News";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Header />
          <Switch>
            <Route path="/news/:id" component={News}/>
            <Route exact path="/" component={Home} />
          </Switch>
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
