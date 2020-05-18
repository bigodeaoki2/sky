import { Component, OnInit, Input, HostListener } from '@angular/core';
import { movies } from 'src/app/models/Movies';

@Component({
  selector: 'app-movielist',
  templateUrl: './movielist.component.html',
  styleUrls: ['./movielist.component.scss']
})
export class MovielistComponent implements OnInit {

  @Input() movies: movies;
  @Input() title: String;

  public innerWidth: any;

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.innerWidth = window.innerWidth;
    this.setSliderConfigInit()
  }

  slides = [
    {img: "http://placehold.it/234x357/000000"},
    {img: "http://placehold.it/234x357/111111"},
    {img: "http://placehold.it/234x357/222222"},
    {img: "http://placehold.it/234x357/333333"},
    {img: "http://placehold.it/234x357/444444"},
    {img: "http://placehold.it/234x357/555555"},
    {img: "http://placehold.it/234x357/666666"},
    {img: "http://placehold.it/234x357/777777"},
    {img: "http://placehold.it/234x357/888888"},
  ];

  slideConfig : any;

  constructor() { }

  ngOnInit() {
    this.setSliderConfigInit();
  }

  setSliderConfigInit () {
    if (this.innerWidth >= 1750) {
      this.slideConfig = {"slidesToShow": 7, "slidesToScroll": 7};
    } 
    if (this.innerWidth >= 1300 && this.innerWidth < 1700) {
      this.slideConfig = {"slidesToShow": 6, "slidesToScroll": 6};
    }
    if (this.innerWidth >= 992 && this.innerWidth < 1300) {
      this.slideConfig = {"slidesToShow": 4, "slidesToScroll": 4};
    }
    if (this.innerWidth < 991) {
      this.slideConfig = {"slidesToShow": 2, "slidesToScroll": 2};
    }
  }

  trackByFn (index, item) {
    return index;
  }

}
