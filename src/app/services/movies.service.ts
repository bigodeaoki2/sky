import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { movies } from '../models/Movies';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  targets = {
    movies: "https://sky-frontend.herokuapp.com/movies"
  }

  constructor(private http: HttpClient) {}

  getMovies () : Observable<movies[]> {
    return this.http.get<movies[]>(this.targets.movies);
  }
}
