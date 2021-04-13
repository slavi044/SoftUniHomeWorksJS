import { Component, OnDestroy, OnInit } from '@angular/core';
import { MovieService } from '../services/movie.service';
import Movie from '../models/Movie';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit, OnDestroy {
  popularMovies: Array<Movie>;
  inTheatreMovies: Array<Movie>;
  popularKidsMovies: Array<Movie>;
  bestDramaMovies: Array<Movie>;
  singleMovie: Movie;
  message = null;
  popularMoviesSub: Subscription;

  constructor(
    private moviesService: MovieService,
    private route: ActivatedRoute
    ) { }

  ngOnInit() {
    this.popularMoviesSub = this.moviesService.getPopularMovies().subscribe(data => {
      this.popularMovies = data;
      this.singleMovie = this.popularMovies[0];
    });

    this.popularMoviesSub = this.moviesService.getInTheatreMovies().subscribe(data => {
      this.inTheatreMovies = data;
    });

    this.popularMoviesSub = this.moviesService.getPopularKidsMovies().subscribe(data => {
      this.popularKidsMovies = data;
    });

    this.popularMoviesSub = this.moviesService.getBestDramaMovies().subscribe(data => {
      this.bestDramaMovies = data;
    });
  }

  fromChild(event){
    console.log(event);
    this.message = event;
  }

  ngOnDestroy() {
    this.popularMoviesSub.unsubscribe();
  }
}
