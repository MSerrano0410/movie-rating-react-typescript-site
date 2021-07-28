import React from "react";
import NavLink from "../classes/NavLink";

/**
 * Creates a generic header for a page
 * Parameters:
 * - headerTitle: String containing the title of the page
 * - headerLinks: key/value list of links for header
 * - headerDescription: Optional subheader for page
 */
export default class AppHeader extends React.Component {
    public headerTitle: String;
    public headerDescription: String;
    public headerLinks: Array<NavLink>;

    constructor(props: { headerTitle: String, headerLinks: Array<NavLink>, headerDescription: String }) {
        super(props);
        this.headerTitle = props.headerTitle;
        this.headerLinks = props.headerLinks;
        this.headerDescription = (props.headerDescription ? props.headerDescription : "");
    }

    render() {
        let sectionLinks = this.headerLinks.map((link) => {
           return link.getJSXElement();
        });

        return (
          <header className="app-header">
              <section className="app-title">
                  <h1>{this.headerTitle}</h1>
                  <small>{this.headerDescription}</small>
              </section>
              <span className="fill-space"/>
              <section className="app-links">
                  {sectionLinks}
              </section>
          </header>
        );
    }
}