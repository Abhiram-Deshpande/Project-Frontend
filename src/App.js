import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar/Navbar";
import { Switch, Route } from "react-router-dom";
import Login from "./components/Login/Login";
import ImageUpload from "./components/ImageUpload/ImageUpload";
import "./index.css";
import Home from "./components/Home/Home";
import Service from "./components/Service/Service";
import { Nav } from "react-bootstrap";

// import "bootstrap/dist/css/bootstrap.min.css";

const About = () => {
  return (
    <>
      <Navbar />
      <section className="hero-section"></section>
    </>
  );
};

const Contact = () => {
  return (
    <>
      <Navbar />
      <section className="hero-section">
        <p>Welcome to </p>
        <h1>Thapa Technical Contact Page</h1>
      </section>
    </>
  );
};

const App = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>

      {/* <Route path="/about">
        <About />
      </Route> */}

      <Route path="/service">
        <Service>
          {/* <ImageUpload></ImageUpload> */}
        
        </Service>
      </Route>

      <Route>
        <Navbar></Navbar>
        <Login></Login>
      </Route>
    </Switch>
  );
};

export default App;
