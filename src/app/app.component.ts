import { Component, OnInit } from '@angular/core';
import { MoviesService } from './services/movies.service';
import { movies } from './models/Movies';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  movies: any;
  highlight: any;
  moviesCategories: any[];
  slider: movies[];
  title = 'sky';

  constructor (private moviesService: MoviesService) {}

  ngOnInit(): void {
    this.moviesService.getMovies().subscribe( movies => {
      console.dir(movies[0]);
      this.highlight = movies[0];
    })

    this.moviesCategories = this.moviesService.getMoviesCategories().categories;

    this.slider = this.moviesService.getSliderMovies();
  }

}
