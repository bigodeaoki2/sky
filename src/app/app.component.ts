import { Component, OnInit } from '@angular/core';
import { MoviesService } from './services/movies.service';
import { movies } from './models/Movies';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  movies: movies[];
  title = 'sky';

  constructor (private moviesService: MoviesService) {}

  ngOnInit(): void {
    this.moviesService.getMovies().subscribe( movies => {
      console.dir(movies);
      this.movies = movies;
    })
  }

}
