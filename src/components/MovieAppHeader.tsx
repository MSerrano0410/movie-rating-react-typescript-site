import AppHeader from "../containers/AppHeader";
import NavLink from "../classes/NavLink";

export default class MovieAppHeader extends AppHeader {
    constructor() {
        const headerNavLinks = [
            new NavLink("Home", "/home", false),
            new NavLink("Movie Rating Table", "/movie-ratings", false),
            new NavLink("About Me", "/about", false),
            new NavLink("Contact Me", "/contact", false),
            new NavLink("My GitHub", "https://github.com/MSerrano0410", true)
        ];

        const headerProps = {
            headerTitle: "My Movie Rating Site",
            headerLinks: headerNavLinks,
            headerDescription: "A small sample site to showcase my React/TypeScript expertise."
        };

        super(headerProps);
    }
}