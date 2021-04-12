import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import Movie from '../models/Movie';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {
  @Input('movie')
  movie: Movie;

  @Output()
  clickButtonEmitter = new EventEmitter();

  imagePath: string;

  constructor() { }

  ngOnInit() {
    console.log(this.movie.poster_path + 'ok from chield');
    this.imagePath = `https://image.tmdb.org/t/p/w500${this.movie.poster_path}`;
  }

  clickButton() {
    console.log('button with id - ' + this.movie.id);
    this.clickButtonEmitter.emit(this.movie.id.toString());
  }
}
