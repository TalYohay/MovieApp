import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(public http: HttpClient) { }

  getAllMovies(page){
    return this.http.get(`https://api.themoviedb.org/3/movie/popular?api_key=90a00768b5ff2e45dd503d207d5f3322&language=en-US&page=${page}`)
  }

  getMovieById(id){
    return this.http.get(`https://api.themoviedb.org/3/movie/${id}?api_key=90a00768b5ff2e45dd503d207d5f3322`)
  }

  getMovieCredit(id){
    return this.http.get(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=90a00768b5ff2e45dd503d207d5f3322`)
  }

  getMovieVideoo(id){
    return this.http.get(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=90a00768b5ff2e45dd503d207d5f3322`)
  }

  getMoviesGenreList(){
    return this.http.get(`https://api.themoviedb.org/3/genre/movie/list?api_key=90a00768b5ff2e45dd503d207d5f3322`)
  }

  getMoviesByGenre(id,page){
    return this.http.get(`https://api.themoviedb.org/3/discover/movie?api_key=90a00768b5ff2e45dd503d207d5f3322&with_genres=${id}&page=${page}`)
  }

  // getMovieCast(id){
  //   return this.http.get(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=90a00768b5ff2e45dd503d207d5f3322`)
  // }
}

// https://api.themoviedb.org/3/discover/movie?api_key=90a00768b5ff2e45dd503d207d5f3322&with_genres=27&page=1