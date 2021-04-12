import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import Movie from '../models/Movie';

const BASE_URL = 'https://api.themoviedb.org/3/movie';
const IN_THEATERS = 'https://api.themoviedb.org/3/discover/movie';
const API_KEY = '?api_key=99fa88bd827e77b9d2fa3720b4a35334';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private http: HttpClient) { }

  getPopularMovies(): Observable<Array<Movie>> {
    return this.http.get<Array<Movie>>(`${BASE_URL}/popular${API_KEY}`);
  }

  getInTheatreMovies(): Observable<Array<Movie>>{
    return this.http.get<Array<Movie>>(`${IN_THEATERS}${API_KEY}&with_release_type=2|3`);
  }
}
