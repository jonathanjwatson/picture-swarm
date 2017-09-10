import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import PictureList from "./components/PictureList";
import PictureIndividual from "./components/PictureIndividual";
import PictureEdit from "./components/PictureEdit";
import PictureNew from "./components/PictureNew";
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
          <Route exact path="/new/picture" component={PictureNew} />
          <Route exact path="/picture/:id/edit" component={PictureEdit} />
          <Route exact path="/picture/:id" component={PictureIndividual} />
          <Route exact path="/signUp" component={SignUp} />
          <Route exact path="/signIn" component={SignIn} />
          
        </div>
      </Router>
    );
  }
}

export default App;