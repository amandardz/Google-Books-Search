import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Search from './pages/Search'
import Saved from "./pages/Saved";
import Header from "./components/Header";
import Navbar from "./components/Navbar/index";

function App() {
  return (
    <Router>
      <div>
      <Navbar />
      <Header />
      <Switch>
        <Route exact path={['/', '/books']}>
          <Search />
        </Route>
        <Route exact path='/saved'>
          <Saved />
        </Route>
      </Switch>
      </div>
    </Router>
  );
}


export default App;
