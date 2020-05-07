import { Component, OnInit } from '@angular/core';
import {ScreenService} from '../screen.service';
import {Screen} from '../screen';


@Component({
  selector: 'app-add-screen',
  templateUrl: './add-screen.component.html',
  styleUrls: ['./add-screen.component.css']
})
export class AddScreenComponent implements OnInit {

  scr:Screen=new Screen();
  constructor(private scrservice:ScreenService) { }

  ngOnInit(): void {

  }

  createScreen():void
  {
    this.scrservice.createNewScreen(this.scr).subscribe(data=>
      {
        alert("screen added");
      },
      error=>
      {
        console.log("erroor occured",error);
      }
    );
    

  }

}
