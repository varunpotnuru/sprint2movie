import { Component, OnInit ,ViewChild} from '@angular/core';
import { MovieService } from '../movie.service';
import { Movie } from '../movie';
import { NgForm } from "@angular/forms";


@Component({
  selector: 'app-add-movie ',
  templateUrl: './add-movie.component.html',
  styleUrls: ['./add-movie.component.css']
})
export class AddMoviComponent implements OnInit {
  @ViewChild("#frm")
  form: NgForm;
  info: String;
  errorInfo: String;

  mov:Movie=new Movie();
  constructor(private moservice:MovieService) { }

  ngOnInit(): void {

  }

  createMovie():void
  {
    this.moservice.createNewMovie(this.mov).subscribe(data=>
      {
        alert("movie added");
      },
      error=>
      {
        console.log("erroor occured",error);
      }
    );
   
   }    
  }


 