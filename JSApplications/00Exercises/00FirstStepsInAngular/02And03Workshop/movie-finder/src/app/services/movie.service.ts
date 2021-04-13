import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap, map } from 'rxjs/operators';
import Movie from '../models/Movie';
import MovieDetails from '../models/MovieDetails';

const BASE_URL = 'https://api.themoviedb.org/3/';//movie
const IN_THEATERS = 'https://api.themoviedb.org/3/discover/movie';
const API_KEY = 'api_key=99fa88bd827e77b9d2fa3720b4a35334';//?
const KIDS = 'discover/movie?certification_country=US&certification.lte=G&sort_by=popularity.desc';
const BEST_DRAMA = 'discover/movie?with_genres=18&primary_release_year=2019';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private http: HttpClient) { }

  getPopularMovies(): Observable<Array<Movie>> {
    return this.http.get<Array<Movie>>(`${BASE_URL}movie/popular?${API_KEY}`)
      .pipe(
        map((data) => data['results'].slice(0, 6))
      );
  }

  getInTheatreMovies(): Observable<Array<Movie>>{
    return this.http.get<Array<Movie>>(`${IN_THEATERS}?${API_KEY}&with_release_type=2|3`)
    .pipe(
      map((data) => data['results'].slice(0, 6))
    );
  }

  getPopularKidsMovies() {
    return this.http.get<Array<Movie>>(`${BASE_URL}${KIDS}&${API_KEY}`)
    .pipe(
      map((data) => data['results'].slice(0, 6))
    );
  }

  getBestDramaMovies(){
    return this.http.get<Array<Movie>>(`${BASE_URL}${BEST_DRAMA}&${API_KEY}`)
    .pipe(
      map((data) => data['results'].slice(0, 6))
    );
  }

  getMovies(url: string) {
    return this.http.get<Array<Movie>>(url)
    .pipe(
      map((data) => data['results'].slice(0, 6))
    );
  }

  getMovieById(id: string) {
    return this.http.get<MovieDetails>(`${BASE_URL}movie/${id}?${API_KEY}`);
  }
}
