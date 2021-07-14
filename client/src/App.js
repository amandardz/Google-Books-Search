import React from "react";
import "./App.css";
import Search from './pages/Search'
import Header from "./components/Header";
import Navbar from "./components/Navbar/index";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Search />
    </div>
  );
}


export default App;
