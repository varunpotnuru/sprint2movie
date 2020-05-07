import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import {Theatre} from './theatre';

@Injectable({
  providedIn: 'root'
})
export class TheatreService {

  theatres:Theatre[]=[];
  constructor(private http:HttpClient) {}
 
  loaddate():Observable<any>         
  {
    let url="http://localhost:2000/theatre";
 
    return this.http.get(url);
  }
  createNewTheatre(theatre:Theatre):Observable<any>
 {
   let url="http://localhost:2000/theatre/new";
   return this.http.post(url,theatre,{responseType:'text'}); 
 }
 deleteTheatre(theatreId:number):Observable<any>
   {
     let url="http://localhost:2000/deleteTheatre/"+theatreId;
     return this.http.delete(url,{responseType:'text'});
   }
}
