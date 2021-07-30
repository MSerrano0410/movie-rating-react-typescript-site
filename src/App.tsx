import React from 'react';
import './App.css';
import MovieAppHeader from "./components/MovieAppHeader";
import HomePage from "./pages/Home/Home";
import AboutPage from "./pages/About/About";
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";

function App() {
  return (
    <div className="App">
        <MovieAppHeader />
        <Router>
            <Switch>
                <Route exact path="/" component={HomePage} />
                <Route exact path="/home" component={HomePage} />
                <Route exact path="/about" component={AboutPage} />
            </Switch>
        </Router>
    </div>
  );
}

export default App;
