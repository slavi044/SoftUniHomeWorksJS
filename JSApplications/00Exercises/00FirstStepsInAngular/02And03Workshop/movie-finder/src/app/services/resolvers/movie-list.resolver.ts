import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { MovieService } from '../movie.service';
import { merge } from 'rxjs';
import  Movie  from '../../models/Movie';

@Injectable()
export class MovieListResolver implements Resolve<Array<Movie>> {

    constructor (
        private moviesService: MovieService
    ){ }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        

        return merge(
            this.moviesService.getInTheatreMovies(),
            this.moviesService.getBestDramaMovies(),
            this.moviesService.getPopularKidsMovies(),
            this.moviesService.getPopularMovies()
        )
    }

}
