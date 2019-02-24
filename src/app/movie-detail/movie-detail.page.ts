import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.page.html',
  styleUrls: ['./movie-detail.page.scss'],
})
export class MovieDetailPage implements OnInit {

  movie;
  idMovie: any = null;
  image: any = null;
  constructor(
      private activatedRouter: ActivatedRoute,
      private movieService: MovieService,
      private router: Router
  ) {
    //this.selectedContact = navParams.get('movie');

  }

  ngOnInit() {
    this.getMovie();
  }

  getMovie() {
    this.idMovie = this.activatedRouter.snapshot.paramMap.get('movie');
    this.movieService.getMovieByID(this.idMovie)
      .subscribe(
        (data) => { // Success
          this.movie = data;
          console.log(this.movie.backdrop_path);
          
        },
        (error) => {
          //console.error(error);
        }
      );

  }

    onClickBack(ev:Event) {
        this.router.navigateByUrl('nowplaying');
    }

}
