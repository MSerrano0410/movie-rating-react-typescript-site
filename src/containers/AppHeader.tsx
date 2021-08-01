import React from "react";
import NavLink from "../classes/NavLink";
import "./AppHeader.css";

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
           return link.getJSXElementAsTableCell();
        });

        return (
          <header className="app-header">
              <section className="app-title">
                  <div className="app-title-text">{this.headerTitle}</div>
                  <small>{this.headerDescription}</small>
              </section>
              <span className="fill-space"/>
              <section className="app-links">
                  <table className="link-table">
                      <tbody>
                      <tr>
                        {sectionLinks}
                      </tr>
                      </tbody>
                  </table>
              </section>
          </header>
        );
    }
}