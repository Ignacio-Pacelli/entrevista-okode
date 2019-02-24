import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: 'list.page.html',
  styleUrls: ['list.page.scss']
})
export class ListPage implements OnInit {
  private selectedItem: any;


  movies: any[] = [];

  public items: Array<{ title: string; note: string; }> = [];
  constructor(
      public movieService: MovieService,
      public router: Router
  ) {}

  ngOnInit() {
    this.movieService.getMovies()
      .subscribe(
       (data) => { // Success
          this.movies = data['results'];
        },
        (error) =>{
          console.error(error);
        }
      );
  }

  onSelect(ev:Event, movie) {
      console.log(movie);
      this.router.navigateByUrl('/movie-detail/'+movie);
  }


}
