import { Component, OnInit } from '@angular/core';
import { ShowService } from '../show.service';
import { Show} from '../show';

@Component({
  selector: 'app-view-student',
  templateUrl: './view-show.component.html',
  styleUrls: ['./view-show.component.css']
})
export class ViewShowComponent implements OnInit {

 constructor(private shoservice:ShowService) { }

 shows:Show[]=[];

 ngOnInit(): void {
      
    this.shoservice.loaddate().subscribe(data=>
      {
        this.shows=data;
      },
      error=>
      {
        console.log("erroor occured",error);
      }
      );
    
  }
  deleteShow(index:number)
   {
     this.shoservice.deleteShow(this.shows[index].showId).subscribe(data=>
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


