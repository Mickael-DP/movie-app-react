import { Movie, SearchMoviesResult } from "../../models/movie.model";

const baseUrl = "https://api.themoviedb.org/3";
const apiKey = process.env["REACT_APP_API_KEY"];

export async function fetchMovies(searchText: string): Promise<SearchMoviesResult> {
 return fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${searchText}&page=1&include_adult=false`,
    {
        method: "GET",
    }
  ).then(async (res) => (await res.json()) as SearchMoviesResult);
}

export async function fetchMovie(id: string): Promise<Movie> {
    return fetch(`${baseUrl}/movie/${id}?api_key=${apiKey}&language=fr-FR`,
    {
        method: "GET",
    }).then(
      async (res) => await res.json()
    ) as Promise<Movie>;
  }