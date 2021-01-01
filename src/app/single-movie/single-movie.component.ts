import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { MoviesService } from 'services/movies.service';
import { map, filter} from 'rxjs/operators';
import {DomSanitizer,SafeResourceUrl,} from '@angular/platform-browser';


@Component({
  selector: 'app-single-movie',
  templateUrl: './single-movie.component.html',
  styleUrls: ['./single-movie.component.css']
})
export class SingleMovieComponent implements OnInit {

  movieID:any;
  singleMovie:Object
  SingleMovieCredit:Object[] = []
  SingleMovieVideo:Object
  MovieKey: string;
  url: SafeResourceUrl;
  MovieKeyFalse: any;
  
  constructor(public sanitizer:DomSanitizer, public moviesService:MoviesService, public route: Router, public actRoute: ActivatedRoute) { }

  ngOnInit() {
    this.movieID = this.actRoute.snapshot.params['id'];
    this.getMovieDetails()
    this.getMovieCredit()
    this.getMovieVideo()

    this.url = this.sanitizer.bypassSecurityTrustResourceUrl(this.movieID);  
  }

  getMovieDetails(){
    console.log("movie ID is:", this.movieID)
      this.moviesService.getMovieById(this.movieID).subscribe((data:Object)=>{
      this.singleMovie = data;
      console.log("Single Movie:", this.singleMovie)
    })
  }

  getMovieCredit(){
    this.moviesService.getMovieCredit(this.movieID).subscribe((data:Object[])=>{
      this.SingleMovieCredit = data;
      console.log("Single Movie Credit:", this.SingleMovieCredit)
    })
  }

  getMovieVideo(){
    this.moviesService.getMovieVideoo(this.movieID).subscribe((data:Object)=>{
      this.SingleMovieVideo = data;
      console.log("Single Movie Video Results:", this.SingleMovieVideo)
    })
  }

   CloseVideo(){
    (<HTMLInputElement>document.getElementById("iframe")).src = this.MovieKey
    console.log("Close Video MovieKey:", this.MovieKey)
}

PlayVideo(){
  this.MovieKey = (<HTMLInputElement>document.getElementById("iframe")).src;
  console.log("PlayVideo MovieKey:",this.MovieKey)

}

onImgError(event) { 
  event.target.src = 'assets/images/ffffff.jpg';
}

}
