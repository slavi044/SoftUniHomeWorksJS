import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import MovieDetails from 'src/app/models/MovieDetails';
import { MovieService } from '../movie.service';

@Injectable()
export class SingleMovieResolver implements Resolve<MovieDetails> {

    constructor (
        private moviesService: MovieService
    ){ }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        const id = route.params['id'];

        return this.moviesService.getMovieById(id);
    }

}