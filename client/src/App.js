import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import PictureList from "./components/PictureList";
import PictureIndividual from "./components/PictureIndividual";
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';
import GlobalNav from './components/GlobalNav';
import { setAxiosDefaults } from './util';
import "./App.css";

class App extends Component {
  componentWillMount(){
    setAxiosDefaults();
  }
  
  render() {
  
    return (
      <Router>
        <div className="App">
        <GlobalNav />
          <Route exact path="/" component={PictureList} />
          <Route path="/picture/:id" component={PictureIndividual} />
          <Route exact path="/signUp" component={SignUp} />
          <Route exact path="/signIn" component={SignIn} />
        </div>
      </Router>
    );
  }
}

export default App;