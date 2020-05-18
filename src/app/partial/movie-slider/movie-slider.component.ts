import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-movie-slider',
  templateUrl: './movie-slider.component.html',
  styleUrls: ['./movie-slider.component.scss']
})
export class MovieSliderComponent implements OnInit {

  @Input() list: any;
  movies: any;

  slideConfig = {"slidesToShow": 1, "slidesToScroll": 1};

  constructor() { }

  ngOnInit() {
    console.dir(this.list);
    this.movies = this.list.items
  }

}
