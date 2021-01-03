import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { MoviesService } from 'services/movies.service';
import { map, filter} from 'rxjs/operators';
import { forkJoin } from 'rxjs';



@Component({
  selector: 'app-genre-page',
  templateUrl: './genre-page.component.html',
  styleUrls: ['./genre-page.component.css']
})
export class GenrePageComponent implements OnInit {
  genreID: any;
  page:any
  movies:Object[] = []
  allMovies:Object[]
  test:Object[]
  matchingMovies:any[]
  page2:any
  pageActual:any;
  genreList: any[] = [];
  genre:any[] = []
  genreName:String;
  genresOfMovies:any[]=[
    {
        id: "28",
        name: "Action"
    },
    {
        id: "12",
        name: "Adventure"
    },
    {
        id: "16",
        name: "Animation"
    },
    {
        id: "35",
        name: "Comedy"
    },
    {
        id: "80",
        name: "Crime"
    },
    {
        id: "99",
        name: "Documentary"
    },
    {
        id: "18",
        name: "Drama"
    },
    {
        id: "10751",
        name: "Family"
    },
    {
        id: "14",
        name: "Fantasy"
    },
    {
        id: "36",
        name: "History"
    },
    {
        id: "27",
        name: "Horror"
    },
    {
        id: "10402",
        name: "Music"
    },
    {
        id: "9648",
        name: "Mystery"
    },
    {
        id: "10749",
        name: "Romance"
    },
    {
        id: "878",
        name: "Science Fiction"
    },
    {
        id: "10770",
        name: "TV Movie"
    },
    {
        id: "53",
        name: "Thriller"
    },
    {
        id: "10752",
        name: "War"
    },
    {
        id: "37",
        name: "Western"
    }
]
  constructor(public moviesService:MoviesService, public actRoute: ActivatedRoute) { }

  ngOnInit() {  
    this.genreID = this.actRoute.snapshot.params['id'];
    console.log("Genre id:", this.genreID)
    this.sortCat()
    this.getGenreList()
    console.log("genresOfMovies:", this.genresOfMovies)
    this.test5()

  
  }
  // sortCat(){
  //   this.moviesService.getMoviesByGenre(this.genreID).subscribe((data:Object[])=>{
  //     this.matchingMovies = data
  //     console.log(this.matchingMovies)
  //   })
  // }


  sortCat(){
    for(let i = 1; i<=500; i++){
      this.movies.push(this.moviesService.getMoviesByGenre(this.genreID,i))
    }
    
    forkJoin(this.movies).subscribe((data:any[])=>{
      this.matchingMovies = data.flat(1)
      console.log("Matching Movies:", this.matchingMovies)
    }) 
    // console.log("All Movies2:", this.allMovies.results)
  }

  
  getGenreList(){
    this.moviesService.getMoviesGenreList().subscribe((data:Object[])=>{
      this.genreList = data;
      console.log("Genre List:", this.genreList)
    })


    }
  
    test5(){
      for(let i = 0; i<this.genresOfMovies.length;i++){
        if(this.genresOfMovies[i].id == this.genreID){
          this.genreName = this.genresOfMovies[i].name
          console.log("genreName:", this.genreName)
          // console.log("result:", this.genresOfMovies[i].id)
        // console.log("Genre Name:",this.genresOfMovies[i].name)
      }
    }

  }

}

