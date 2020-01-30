import { Component, OnInit } from '@angular/core';
import {ServiceMovieApiService} from '../../service/service-movie-api.service';
import {DomSanitizer} from '@angular/platform-browser';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  idmovie;

  images;

  video;

  oneimage;

  imagewithoutone;

  constructor(private sanitizer:DomSanitizer,private $ser: ServiceMovieApiService,private route: ActivatedRoute) { }
  ngOnInit() {
    this.idmovie = this.route.snapshot.paramMap.get("id");
    this.getImages();
    this.getVideo();
  }

  getImages(){
    this.$ser.getImages(this.idmovie).subscribe((res: Response) => {
      this.images =Array.of(res);
      this.images=this.images[0]['backdrops'];
    });

  }
  getImage(path){
    return "https://image.tmdb.org/t/p/w500/"+path;
  }
  getVideo(){
      this.$ser.getVideos(this.idmovie).subscribe((res: Response) => {
      this.video =Array.of(res);
      this.video=this.video[0]['results'];
      this.video=Array.of(this.video[0]);
      console.log(this.video);
    });
  }
  getEmbedUrl(item){
    return this.sanitizer.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/"+item);
  }

}
