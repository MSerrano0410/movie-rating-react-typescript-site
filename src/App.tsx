import React from 'react';
import './App.css';
import MovieAppHeader from "./components/MovieAppHeader";
import HomePage from "./pages/Home/Home";
import AboutPage from "./pages/About/About";
import MovieRatingsTable from "./pages/MovieRatings/MovieRatingsTable";
import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
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
                <Route exact path="/movie-ratings" component={MovieRatingsTable}/>
            </Switch>
        </Router>
    </div>
  );
}

export default App;
