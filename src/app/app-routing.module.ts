import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ShowallmoviesComponent} from './showallmovies/showallmovies.component';
import { SingleMovieComponent } from './single-movie/single-movie.component'
import { GenrePageComponent } from './genre-page/genre-page.component'


const routes: Routes = [
  {path: '', component: ShowallmoviesComponent},
  {path: 'movie/:id', component:SingleMovieComponent},
  {path: 'genre/:id', component:GenrePageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
