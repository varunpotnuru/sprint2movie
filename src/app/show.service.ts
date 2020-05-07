import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import {Show} from './show';

@Injectable({
  providedIn: 'root'
})
export class ShowService {
  shows:Show[]=[];
  constructor(private _http:HttpClient) {}
 
  loaddate():Observable<any>         
  {
    let url="http://localhost:2000/show";
 
    return this._http.get(url);
  }
  createNewShow(show:Show):Observable<any>
 {
   let url="http://localhost:2000/show/new";
   return this._http.post(url,show,{responseType:'text'}); 
 }
 deleteShow(showId:number):Observable<any>
 {
   let url="http://localhost:2000/deleteShow/"+showId;
   return this._http.delete(url,{responseType:'text'});
 }
}
