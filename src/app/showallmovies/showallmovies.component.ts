import { Component, OnInit } from '@angular/core';
import {MoviesService} from 'services/movies.service'
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-showallmovies',
  templateUrl: './showallmovies.component.html',
  styleUrls: ['./showallmovies.component.css']
})
export class ShowallmoviesComponent implements OnInit {
  movies:Object[] = []
  allMovies:Object[]
  pageActual:any;
  genreList: Object[];


  constructor(public moviesService:MoviesService) { }
  

  ngOnInit() {
    this.getAllMovies();
    this.getGenreList()
    // this.getGenreName()
  }


  getAllMovies(){
    for(let i = 1; i<=30; i++){
      this.movies.push(this.moviesService.getAllMovies(i))
    }
    forkJoin(this.movies).subscribe((data:any[])=>{
      this.allMovies = data.flat(1)
      console.log("All Movies:", this.allMovies)
    
    }) 
    // console.log("All Movies2:", this.allMovies.results)
  }

  getGenreList(){
    this.moviesService.getMoviesGenreList().subscribe((data:any[])=>{
      this.genreList = data;
      console.log("Genre List:", this.genreList)
    })
  }


  openNav(){
    document.getElementById("myGenres").style.width = "250px";
  }

  closeNav(){
    document.getElementById("myGenres").style.width = "0";
  }



}
