/**
 * Class for a navigation link; used for headers and footers
 * Parameters:
 * - label: String to show to the front-end user
 * - route: String representing the URL to go to
 * - isExternal: boolean to determine whether the link should open in a new window or not
 */
export default class NavLink {
    public label: string;
    public route: string;
    public isExternal: boolean;
    public target: string;

    constructor(label: string, route: string, isExternal: boolean) {
        this.label = label;
        this.route = route;
        this.isExternal = isExternal;
        this.target = (this.isExternal ? "_blank" : "_self");
    }

    /**
     * Constructs and returns the JSX element related to this object.
     */
    getJSXElement() {
        return (
          <span className="nav-link">
              <a href={this.route} target={this.target}>{this.label}</a>
          </span>
        );
    }

    getJSXElementAsTableCell() {
        return (
          <td key={this.route}>
              <a href={this.route} target={this.target}>{this.label}</a>
          </td>
        );
    }

    setLabel(label: string) {
        this.label = label;
    }

    setRoute(route: string) {
        this.route = route;
    }

    setIsExternal(isExternal: boolean) {
        this.isExternal = isExternal;
    }

    getLabel() {
        return this.label;
    }

    getRoute() {
        return this.route;
    }

    getIsExternal() {
        return this.isExternal;
    }
}