import { Component, OnInit } from '@angular/core';
import {TheatreService} from '../theatre.service';
import {Theatre} from '../theatre';

@Component({
  selector: 'app-add-theatre',
  templateUrl: './add-theatre.component.html',
  styleUrls: ['./add-theatre.component.css']
})
export class AddTheatreComponent implements OnInit {
  info: String;
  errorInfo: String;

  the:Theatre=new Theatre();
  constructor(private thservice:TheatreService) { }

  ngOnInit(): void {

  }

  createTheatre():void
  {
    this.thservice.createNewTheatre(this.the).subscribe(data=>
      {
        alert("theatre added");
      },
      error=>
      {
        console.log("erroor occured",error);
      }
    );
    

  }

}
  