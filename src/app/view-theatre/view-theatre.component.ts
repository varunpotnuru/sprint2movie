import { Component, OnInit } from '@angular/core';
import { TheatreService } from '../theatre.service';
import { Theatre } from '../theatre';

@Component({
  selector: 'app-view-student',
  templateUrl: './view-theatre.component.html',
  styleUrls: ['./view-theatre.component.css']
})
export class ViewTheatreComponent implements OnInit {

 constructor(private theservice:TheatreService) { }

 theatres:Theatre[]=[];

 ngOnInit(): void {
      
    this.theservice.loaddate().subscribe(data=>
      {
        this.theatres=data;
      },
      error=>
      {
        console.log("erroor occured",error);
      }
      );
    
  }
  deleteTheatre(index:number)
   {
     this.theservice.deleteTheatre(this.theatres[index].theatreId).subscribe(data=>
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


