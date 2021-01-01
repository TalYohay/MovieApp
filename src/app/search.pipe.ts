import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name:'moviesFilter',
  pure: false // impure pipe
})
export class SearchPipe implements PipeTransform {

  // transform(value:any, arg ?: any): any {
  //   if(!value) return null;
  //   if(!arg) return value;
    
  //   arg = arg.toLowerCase();

  //   return value.filter(function(myData){
  //     return (JSON.stringify(myData.name).toLowerCase().includes(arg) || JSON.stringify(myData.description).toLowerCase().includes(arg));
  //   });
  // }
  transform(movies:any[], searchTerm : string): any[] {
    if(!movies || !searchTerm){
      return movies;
    }
    return movies.filter(movie => 
      movie.title.toLocaleLowerCase().indexOf(searchTerm.toLocaleLowerCase()) !== -1);
  }
}