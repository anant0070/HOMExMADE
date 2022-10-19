import React, { useState, useEffect, Fragment } from "react";
import "./App.css";
import Header from "./components/Header";
import Recipes from "./components/Recipes";
import Axios from "axios";
import Home from "./components/Home";
import Nav from "./components/Nav";
import Signform from "./components/Signform";
import Footer from "./components/Footer";

function App() {

  
  const [search, setSerach] = useState("");
  const [recipes, setRecipes] = useState([]);

  const APP_ID = "a9e97685";
  const APP_KEY = "9709c0401aa79a15eb622257a4358c0b";

  useEffect(() => {
    getRecipes();
  }, []);

  const getRecipes = async () => {
    const res = await Axios.get(
      `https://api.edamam.com/search?q=${search}&app_id=${APP_ID}&app_key=${APP_KEY}`
    );
    setRecipes(res.data.hits);
  };

  const onInputChange = e => {
    setSerach(e.target.value);
  };

  const onSearchClick = () => {
    getRecipes();
  };

  return (
    <Fragment>
      <section id="nav">
      <Nav className />
      </section>


      <section id="home">
      <Home />
      </section>


  <section id="search">
    <div className="App">
      <Header
        search={search}
        onInputChange={onInputChange}
        onSearchClick={onSearchClick}
      />
      <div className="container">
        
        <Recipes  recipes={recipes} search={search} />
    
      </div>
    </div>
    </section>

    <section id="sign">
      <Signform />
    </section>

    <section id="footer">
    <Footer  />
    </section>
    </Fragment> 
  );

}

export default App;