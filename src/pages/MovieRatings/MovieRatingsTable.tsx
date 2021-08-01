import DisplayTable from "../../components/DisplayTable/DisplayTable";
import TableColumn from "../../classes/TableColumn";
import {getAllMovieListings} from "../../utils/DatabaseUtils";
import "./MovieRatingsTable.css";

/**
 * Extension of DisplayTable. Note that the template function is static; this is recommended so it can properly be called in DisplayTable.
 */
export default class MovieRatingsTable extends DisplayTable {
    constructor() {
        let movieColumns = [
            new TableColumn("movie_title", "Movie Title", null, true),
            new TableColumn("genre", "Genre", null, true),
            new TableColumn("rating", "Rating", null, true),
            new TableColumn("notes", "Movie Notes", MovieRatingsTable.movieNoteTemplate, false),
            new TableColumn("director", "Movie Director", null, true),
            new TableColumn("year_created", "Year Created", null, true)
        ];
        let props = {
            tableTitle: "Movie Ratings",
            emptyMessage: "No ratings match the search criteria.",
            numberRows: 5,
            columns: movieColumns,
            hasSearch: true,
            dataFunction: getAllMovieListings()
        };

        super(props);
    }

    static movieNoteTemplate(rowData: any) {
        return (
            <div className="movie-template-notes">{rowData.notes}</div>
        );
    }
}