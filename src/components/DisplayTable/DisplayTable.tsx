import React from "react";
import TableColumn from "../../classes/TableColumn";
import { InputText } from "primereact/inputtext";
import {DataTable} from "primereact/datatable";
import "./DisplayTable.css";


const { worker } = require('../../mocks/browser')
worker.start()

//TODO: Make selected columns dropdown list, style table
export default class DisplayTable extends React.Component {
    public tableTitle: string;
    public emptyMessage: string;
    public columns: Array<TableColumn>;
    public hasSearch: boolean;
    public dataFunction: any;
    public numberRows: number;
    public state: any;

    constructor(props: {tableTitle: string, emptyMessage: string, numberRows: number, columns: Array<TableColumn>, hasSearch: boolean, dataFunction: any}) {
        super(props);
        this.tableTitle = props.tableTitle;
        this.emptyMessage = props.emptyMessage;
        this.columns = props.columns;
        this.hasSearch = props.hasSearch;
        this.dataFunction = props.dataFunction;
        this.numberRows = props.numberRows;

        this.state = {
            data: null,
            selectedColumns: [],
            globalFilter: null
        };
    }

    componentDidMount() {
        this.dataFunction.then((resp: any) => this.setState({data: resp.data}));
    }

    renderHeader() {
        return (
            <div className="table-header">
                <span className="p-input-icon-left">
                    <i className="pi pi-search" />
                    <InputText type="search" onInput={(e) => this.setState({globalFilter: e.currentTarget.value})} placeholder="Global Search" />
                </span>
            </div>
        );
    }

    render() {
        const header = this.renderHeader();
        const columnComponents = this.columns.map((column: TableColumn) => {
            return column.getJSXColumnElement();
        });

        return (
            <div className="movie-ratings-demo">
                <div className="table-title">{this.tableTitle}</div>
                <DataTable value={this.state.data} header={header} globalFilter={this.state.globalFilter}
                           paginator rows={this.numberRows} emptyMessage={this.emptyMessage}
                           currentPageReportTemplate="Showing {first} to {last} of {totalRecords} listings"
                           paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport">
                    {columnComponents}
                </DataTable>
            </div>
        )
    }


}