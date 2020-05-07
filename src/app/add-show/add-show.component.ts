import { Component, OnInit } from '@angular/core';
import {ShowService} from '../show.service';
import {Show} from '../show';

@Component({
  selector: 'app-add-theatre',
  templateUrl: './add-show.component.html',
  styleUrls: ['./add-show.component.css']
})
export class AddShowComponent implements OnInit {

  sho:Show=new Show();
  constructor(private shoservice:ShowService) { }

  ngOnInit(): void {

  }

  createShow():void
  {
    this. shoservice.createNewShow(this.sho).subscribe(data=>
      {
        alert("show added");
      },
      error=>
      {
        console.log("erroor occured",error);
      }
    );
    

  }




}
