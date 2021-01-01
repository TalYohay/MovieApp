import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShowallmoviesComponent } from './showallmovies/showallmovies.component';
import {MoviesService} from 'services/movies.service';
import { SingleMovieComponent } from './single-movie/single-movie.component';
import { SafePipePipe } from './safe-pipe.pipe';
import { SearchPipe } from './search.pipe';
import {NgxPaginationModule} from 'ngx-pagination';
import { GenrePageComponent } from './genre-page/genre-page.component';
@NgModule({
  declarations: [
    AppComponent,
    ShowallmoviesComponent,
    SingleMovieComponent,
    SafePipePipe,
    SearchPipe,
    GenrePageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgxPaginationModule
  ],
  providers: [MoviesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
