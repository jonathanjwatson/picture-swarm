import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import PictureList from "./components/PictureList";
import PictureIndividual from "./components/PictureIndividual";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <div>
            <h1>Picture Swarm</h1>

          </div>
          <Route exact path="/" component={PictureList} />
          <Route path="/picture/:id" component={PictureIndividual} />
        </div>
      </Router>
    );
  }
}

export default App;