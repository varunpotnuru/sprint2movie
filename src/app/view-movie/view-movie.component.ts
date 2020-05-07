import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';
import { Movie } from '../movie';

@Component({
  selector: 'app-view-student',
  templateUrl: './view-movie.component.html',
  styleUrls: ['./view-movie.component.css']
})
export class ViewMovieComponent implements OnInit {

 constructor(private moservice:MovieService) { }

 movies:Movie[]=[];

 ngOnInit(): void {
      
    this.moservice.loaddate().subscribe(data=>
      {
        this.movies=data;
      },
      error=>
      {
        console.log("erroor occured",error);
      }
      );

     
    
  }
  removeMovie(movieId:number)
    {
      this.movies=this.moservice.removeMovie1(movieId);
    }
   deleteMovie(index:number)
   {
     this.moservice.deleteMovie(this.movies[index].movieId).subscribe(data=>
      {
        alert("deleted successfully");
      },
      error=>
      {
        alert("error");
        console.log("error");
      });
   } 
  
  
  

}


