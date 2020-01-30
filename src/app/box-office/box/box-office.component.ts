import { Component, OnInit } from '@angular/core';
import {ServiceMovieApiService} from '../../service/service-movie-api.service';
import {DomSanitizer} from '@angular/platform-browser';
import {Router} from '@angular/router';
@Component({
  selector: 'app-box-office',
  templateUrl: './box-office.component.html',
  styleUrls: ['./box-office.component.css']
})
export class BoxOfficeComponent implements OnInit {
  movies : Response[];

  onemovie;

  moviewithoutone;

  images;

  Idmovie;

  constructor(private $ser: ServiceMovieApiService,private sanitizer:DomSanitizer,private router: Router) { }

  ngOnInit() {
    this.getMovies();
  }

  getMovies() {
    this.$ser.getMovie().subscribe((res: Response) => {
      this.movies =Array.of(res);
      this.movies=this.movies[0]['results'];
      this.onemovie=Array.of(this.movies[0]);
      this.moviewithoutone=Array.of(this.movies.slice(1));
      this.moviewithoutone=this.moviewithoutone[0];
    });
  }

  getImage(path){
    return "https://image.tmdb.org/t/p/w500/"+path;
  }

  OpenMovie(id){
    this.Idmovie=id;
    this.router.navigate(['./movie/'+id]);
  }


}

