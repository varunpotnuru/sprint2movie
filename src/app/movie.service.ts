import { Injectable } from '@angular/core';
import {HttpClient }from '@angular/common/http'
import { Observable } from 'rxjs';
import {Movie} from './movie';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  movies:Movie[]=[];
  private baseUrl="http://localhost:2000/";
  constructor(private _http:HttpClient) {}
 
  loaddate():Observable<any>         
  {
    let url="http://localhost:2000/movie";
 
    return this._http.get(url);
  }
  createNewMovie(movie:Movie):Observable<any>
 {
   let url='http://localhost:2000/movie/new';
   return this._http.post(url,movie,{responseType:'text'}); 
 }
 removeMovie1(movieId:number):Movie[]
   {
     if(confirm("Are you sure really want to delete"))
     {
      return this.movies=this.movies.filter(mov=>mov.movieId!=movieId);

     }
    return this.movies;
   }
   deleteMovie(movieId:number):Observable<any>
   {
     let url="http://localhost:2000/deleteMovie/"+movieId;
     return this._http.delete(url,{responseType:'text'});
   }

  
   }



 

