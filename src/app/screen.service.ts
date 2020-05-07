import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import {Screen} from './screen';

@Injectable({
  providedIn: 'root'
})
export class ScreenService {

  screens:Screen[]=[];
  constructor(private http:HttpClient) {}
 
  loaddate():Observable<any>         
  {
    let url="http://localhost:2000/screen";
 
    return this.http.get(url);
  }
  createNewScreen(screen:Screen):Observable<any>
 {
   let url="http://localhost:2000/screen/new";
   return this.http.post(url,screen,{responseType:'json'}); 
 }
 deleteScreen(screenId:number):Observable<any>
   {
     let url="http://localhost:2000/deleteScreen/"+screenId;
     return this.http.delete(url,{responseType:'text'});
   }

 
}
