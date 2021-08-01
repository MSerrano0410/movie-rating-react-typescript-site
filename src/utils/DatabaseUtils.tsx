/**
 * Utility database functions; currently only use Axios with the msw mock API library until middleware can be set up
 */
import axios from "axios";

export function getAllMovieListings() {
    return axios.get("/movie-ratings-data").then(res => res.data);
}