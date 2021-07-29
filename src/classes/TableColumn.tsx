/**
 * Class to represent a Column element of a DataTable
 * Parameters:
 * - field: string. This will be used as both the unique key for each <Column> JSX element and the "field" attribute
 *      NOTE: Field values will also be used as search keys for the multi-select dropdown to show/hide columns
 * - header: string. The displayed text for the column i.e. the column headers
 * - template: Function. Optional
 */
import { Column } from "primereact/column";

export default class TableColumn {
    public field: string;
    public header: string;
    public template: any;
    public isSortable: boolean;

    constructor(field: string, header: string, template: any, isSortable: boolean) {
        this.field = field;
        this.header = header;
        this.template = template;
        this.isSortable = isSortable;
    }

    getJSXColumnElement() {
        if (this.isSortable) {
            return <Column key={this.field} header={this.header} field={this.field} sortable body={this.template}/>
        }
        return <Column key={this.field} header={this.header} field={this.field} body={this.template}/>
    }

    setField(field: string) {
        this.field = field;
    }

    setHeader(header: string) {
        this.header = header;
    }

    setTemplate(template: Function) {
        this.template = template;
    }

    setIsSortable(isSortable: boolean) {
        this.isSortable = isSortable;
    }

    getField() {
        return this.field;
    }

    getHeader() {
        return this.header;
    }

    getTemplate() {
        return this.template;
    }

    getIsSortable() {
        return this.isSortable;
    }
}