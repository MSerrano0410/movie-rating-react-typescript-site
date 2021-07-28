import React from 'react';
import './App.css';
import NavLink from "./classes/NavLink";
import AppHeader from "./containers/AppHeader";

//TODO: Styling for header
function App() {
  const headerNavLinks = [
      new NavLink("Home", "/home", false),
      new NavLink("Movie Rating Table", "/movie-ratings", false)
  ];

  const headerProps = {
    headerTitle: "My Movie Rating Site",
    headerLinks: headerNavLinks,
    headerDescription: "A small sample site to showcase my React/TypeScript expertise."
  };

  let header = new AppHeader(headerProps);

  return (
    <div className="App">
        {header.render()}
    </div>
  );
}

export default App;
