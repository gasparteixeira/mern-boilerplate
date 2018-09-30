import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "../containers/Home";
import About from "../containers/About";
import Components from "../containers/Components";

const Main = () => (
    <main>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/about" component={About}/>
        <Route path="/components" component={Components}/>
      </Switch>
    </main>
  )
  
  export default Main;