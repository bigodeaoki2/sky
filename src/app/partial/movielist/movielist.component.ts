import { Component, OnInit, Input, HostListener } from '@angular/core';
import { movies } from 'src/app/models/Movies';

@Component({
  selector: 'app-movielist',
  templateUrl: './movielist.component.html',
  styleUrls: ['./movielist.component.scss']
})
export class MovielistComponent implements OnInit {

  @Input() movies: any;
  @Input() title: any;

  public innerWidth: any;
  list: any;

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.innerWidth = window.innerWidth;
  }

  slideConfig : any;

  constructor() { }

  ngOnInit() {
    this.filterByCategory();
    this.slideConfig = {"slidesToShow": 7, "slidesToScroll": 7};
  }

  trackByFn (index, item) {
    return index;
  }

  filterByCategory () {
    if (this.title === 1) {
      this.title = "Ação";
      this.list = this.movies.movies.filter( movie => movie.categories.includes('Ação'))
    }
    if (this.title === 2) {
      this.title = "Comédia e infatil";
      this.list = this.movies.movies.filter( movie => {
        return (movie.categories.includes('Comédia') || movie.categories.includes('Infantil'))
      })
    }

    if (this.title === 3) {
      this.title = "Drama e Animação";
      this.list = this.movies.movies.filter( movie => {
        return (
          movie.categories.includes('Drama') ||
          movie.categories.includes('Animação')
        );
      })
    }            
    if (this.title === 4) {
      this.title = "Ficção Científica e Fantasia";
      this.list = this.movies.movies.filter( movie => {
        return (
          movie.categories.includes('Ficção Científica') ||
          movie.categories.includes('Fantasia')
        );
      })
    }
    if (this.title === 5) {
      this.title = "Musical";
      this.list = this.movies.movies.filter( movie => movie.categories.includes('Musical'))
    }         
  }

}
