import React from "react";
import "./Home.css";

export default class HomePage extends React.Component {
    constructor(props: {} | Readonly<{}>) {
        super(props);
    }

    render() {
        return (
            <div className="home-page">
                <div className="home-page-title">
                    Welcome to my React/TypeScript showcase!
                </div>
                <small>
                    This is a small showcase website using React and TypeScript. In particular, you'll see the following here:
                    <ul>
                        <li>A showcase of React components using DataTable elements with sorting, pagination, and other features,</li>
                        <li>In my code, you'll see samples of my commenting habits, my naming conventions, MVC-minded coding style, unit tests, and more,</li>
                        <li>A small sampling of my proficiency with CSS and styling for both mobile and desktop layouts.</li>
                    </ul>
                    As this website, from a stylistic perspective, is relatively simple, you can view a more intricate example of my CSS styling at <a href="https://buyaccessible.gov" target="_blank">The ART Website</a>
                </small>
            </div>
        );
    }
}