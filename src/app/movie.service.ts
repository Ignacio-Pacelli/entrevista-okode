import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(
    private http: HttpClient
  ) {}

  getMovies() {
      return this.http.get('https://api.themoviedb.org/3/movie/now_playing?api_key=89a08ffd2b9f8a9bbb089a3173659a2c&language=en-US&page=1');
  }
  getMovieByID(id: string) {
    return this.http.get('https://api.themoviedb.org/3/movie/'+id+'?api_key=89a08ffd2b9f8a9bbb089a3173659a2c&language=en-US&page=1');
  }

  getMovieImage(path: string) {
    return this.http.get('https://image.tmdb.org/t/p/w185/'+path+'?api_key=89a08ffd2b9f8a9bbb089a3173659a2c&language=en-US&page=1');
  }
}
