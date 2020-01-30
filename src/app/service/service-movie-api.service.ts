import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ServiceMovieApiService {
  constructor(private $http: HttpClient) {}
  getMovie(): Observable<any> {
    return this.$http.get('https://api.themoviedb.org/3/movie/now_playing?api_key=5b5056162db4012d0c06720c61d4c1db&page=1');
}

  getImages(id){
  return this.$http.get('https://api.themoviedb.org/3/movie/'+id+'/images?api_key=5b5056162db4012d0c06720c61d4c1db');
}

 getVideos(id){
  return this.$http.get('https://api.themoviedb.org/3/movie/'+id+'/videos?api_key=5b5056162db4012d0c06720c61d4c1db');
}


}
