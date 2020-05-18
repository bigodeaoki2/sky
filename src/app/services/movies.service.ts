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

  getMoviesCategories () : any {
    return {
      categories: [
        {
          category: "Os Mais Temidos",
          movies: [
            { title: "movie 1", img: "https://d3bntrzcei186j.cloudfront.net/fit-in/170x255/filters:format(png)/images/sky-content-hub-prd/5a2a86e54b2cc9000154c07d/5a563880332c65000165b739_3_300x450.jpeg?timestamp=1587643150695", type: 1, producer: 0},
            { title: "movie 2", img: "https://d3bntrzcei186j.cloudfront.net/fit-in/170x255/filters:format(png)/images/sky-content-hub-prd/5c53449a19418eeb4b5275d9/5a563880332c65000165b739_3_300x450.jpeg?timestamp=1587987973432", type: 1, producer: 0},
            { title: "movie 3", img: "https://d3bntrzcei186j.cloudfront.net/fit-in/170x255/filters:format(png)/images/sky-content-hub-prd/5c51f2d22aaea02085ef2528/5a563880332c65000165b739_3_300x450.jpeg?timestamp=1588085474695", type: 1, producer: 0},
            { title: "movie 4", img: "https://d3bntrzcei186j.cloudfront.net/fit-in/170x255/filters:format(png)/images/sky-content-hub-prd/5ced72a914227e19ae535c67/5a563880332c65000165b739_3_300x450.jpeg?timestamp=1588084628126", type: 1, producer: 0},
            { title: "movie 5", img: "https://d3bntrzcei186j.cloudfront.net/fit-in/170x255/filters:format(png)/images/sky-content-hub-prd/5aaf54168aca35000183379c/5a563880332c65000165b739_3_300x450.jpeg?timestamp=1588085041815", type: 1, producer: 0},
            { title: "movie 6", img: "https://d3bntrzcei186j.cloudfront.net/fit-in/170x255/filters:format(png)/images/sky-content-hub-prd/5c51f31d38161b9fcffd99ca/5a563880332c65000165b739_3_300x450.jpeg?timestamp=1588857175782", type: 1, producer: 0},
            { title: "movie 7", img: "https://d3bntrzcei186j.cloudfront.net/fit-in/170x255/filters:format(png)/images/sky-content-hub-prd/5a7400f1ceb217000129930f/5a563880332c65000165b739_3_300x450.jpeg?timestamp=1588857367404", type: 1, producer: 0},
            { title: "movie 8", img: "https://d3bntrzcei186j.cloudfront.net/fit-in/170x255/filters:format(png)/images/sky-content-hub-prd/5afbea5495a4e22f9dba62b1/5a563880332c65000165b739_3_300x450.jpeg?timestamp=1588972531390", type: 1, producer: 0},
            { title: "movie 8", img: "https://d3bntrzcei186j.cloudfront.net/fit-in/170x255/filters:format(png)/images/sky-content-hub-prd/5d10cea1ee588b7aa2db289a/5a563880332c65000165b739_3_300x450.jpeg?timestamp=1588972858583", type: 1, producer: 0}

          ]
        },
        {
          category: "Superestreias Telecine",
          movies: [
            { title: "movie 21", img: "https://d3bntrzcei186j.cloudfront.net/fit-in/170x255/filters:format(png)/images/sky-content-hub-prd/5b001709e25fa80841c90d2a/5a563880332c65000165b739_3_300x450.jpeg?timestamp=1589488780745", type: 1, producer: 0},
            { title: "movie 22", img: "https://d3bntrzcei186j.cloudfront.net/fit-in/170x255/filters:format(png)/images/sky-content-hub-prd/5afe1169d691cac67d1b106c/5a563880332c65000165b739_3_1000x1500.jpeg?timestamp=1589489083088", type: 1, producer: 1},
            { title: "movie 23", img: "https://d3bntrzcei186j.cloudfront.net/fit-in/170x255/filters:format(png)/images/sky-content-hub-prd/5b96d7d481a507897e5dc992/5a563880332c65000165b739_3_1000x1500.jpeg?timestamp=1588852871642", type: 1, producer: 0},
            { title: "movie 24", img: "https://d3bntrzcei186j.cloudfront.net/fit-in/170x255/filters:format(png)/images/sky-content-hub-prd/5d1d6f658002f31be46c1572/5a563880332c65000165b739_3_1000x1500.jpeg?timestamp=1588853122448", type: 1, producer: 0},
            { title: "movie 25", img: "https://d3bntrzcei186j.cloudfront.net/fit-in/170x255/filters:format(png)/images/sky-content-hub-prd/5afe3fcfcc1266c84490d9da/5a563880332c65000165b739_3_1000x1500.jpeg", type: 1, producer: 0},
            { title: "movie 26", img: "https://d3bntrzcei186j.cloudfront.net/fit-in/170x255/filters:format(png)/images/sky-content-hub-prd/5afba55a34e619555a91d6ea/5a563880332c65000165b739_3_1000x1500.jpeg?timestamp=1584050990801", type: 1, producer: 0},
            { title: "movie 27", img: "https://d3bntrzcei186j.cloudfront.net/fit-in/170x255/filters:format(png)/images/sky-content-hub-prd/5a2a869653c1b200010b97ed/5a563880332c65000165b739_3_1000x1500.jpeg?timestamp=1584646632406", type: 1, producer: 0},
            { title: "movie 28", img: "https://d3bntrzcei186j.cloudfront.net/fit-in/170x255/filters:format(png)/images/sky-content-hub-prd/5afcb0d3189c69c0b1ab7303/5a563880332c65000165b739_3_1000x1500.jpeg", type: 1, producer: 0},
            { title: "movie 28", img: "https://d3bntrzcei186j.cloudfront.net/fit-in/170x255/filters:format(png)/images/sky-content-hub-prd/5afeddad18651d387fc1927d/5a563880332c65000165b739_3_1000x1500.jpeg?timestamp=1588593673719", type: 1, producer: 0}
          ]
        },
        {
          category: "Coletania nacional",
          movies: [
            { title: "movie 31", img: "", type: 1, producer: 0},
            { title: "movie 32", img: "", type: 1, producer: 0},
            { title: "movie 33", img: "", type: 1, producer: 0},
            { title: "movie 34", img: "", type: 1, producer: 0},
            { title: "movie 35", img: "", type: 1, producer: 2},
            { title: "movie 36", img: "", type: 1, producer: 0},
            { title: "movie 37", img: "", type: 1, producer: 0},
            { title: "movie 38", img: "", type: 1, producer: 0}
          ]
        },
        {
          category: "Dc Comics",
          movies: [
            { title: "movie 31", img: "", type: 1, producer: 0},
            { title: "movie 32", img: "", type: 1, producer: 0},
            { title: "movie 33", img: "", type: 1, producer: 0},
            { title: "movie 34", img: "", type: 1, producer: 0},
            { title: "movie 35", img: "", type: 1, producer: 2},
            { title: "movie 36", img: "", type: 1, producer: 0},
            { title: "movie 37", img: "", type: 1, producer: 0},
            { title: "movie 38", img: "", type: 1, producer: 0}
          ]
        },
        {
          category: "Marvel",
          movies: [
            { title: "movie 1", img: "", type: 1, producer: 0},
            { title: "movie 2", img: "", type: 1, producer: 0},
            { title: "movie 3", img: "", type: 1, producer: 0},
            { title: "movie 4", img: "", type: 1, producer: 2},
            { title: "movie 5", img: "", type: 1, producer: 0},
            { title: "movie 6", img: "", type: 1, producer: 0},
            { title: "movie 7", img: "", type: 1, producer: 2},
            { title: "movie 8", img: "", type: 1, producer: 0}
          ]
        }
      ]
    }
  }

  getSliderMovies () : movies[] {
    return [
      { title: "movie 1", img: "", type: 1, producer: 0},
      { title: "movie 2", img: "", type: 1, producer: 0},
      { title: "movie 3", img: "", type: 1, producer: 0},
      { title: "movie 4", img: "", type: 1, producer: 0},
      { title: "movie 5", img: "", type: 1, producer: 0},
    ]
  }
}
