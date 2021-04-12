import { Component, OnInit } from '@angular/core';
import { MovieService } from '../services/movie.service';
import Movie from '../models/Movie';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  popularMovies: Array<Movie>;
  inTheatreMovies: Array<Movie>;
  singleMovie: Movie;
  message = null;

  constructor(private moviesService: MovieService) { }

  ngOnInit() {
    this.moviesService.getPopularMovies().subscribe(data => {
      this.popularMovies = data['results'].slice(0, 6);
      this.singleMovie = this.popularMovies[0];
    });

    this.moviesService.getInTheatreMovies().subscribe(data => {
      this.inTheatreMovies = data['results'].slice(6, 13);
      console.log('in theaters ' + this.inTheatreMovies);
      
    })
  }

  fromChild(event){
    console.log(event);
    this.message = event;
  }

}
