import { Component, OnInit } from '@angular/core';
import { ScreenService } from '../screen.service';
import { Screen } from '../screen';

@Component({
  selector: 'app-view-student',
  templateUrl: './view-screen.component.html',
  styleUrls: ['./view-screen.component.css']
})
export class ViewScreenComponent implements OnInit {

 constructor(private scrservice:ScreenService) { }

 screens:Screen[]=[];

 ngOnInit(): void {
      
    this.scrservice.loaddate().subscribe(data=>
      {
        this.screens=data;
      },
      error=>
      {
        console.log("erroor occured",error);
      }
      );
    
  }
  deleteScreen(index:number)
   {
     this.scrservice.deleteScreen(this.screens[index].screenId).subscribe(data=>
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

