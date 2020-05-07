import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule} from '@angular/common/http';

import { AddMoviComponent } from './add-movie/add-movie.component';

import { AddTheatreComponent } from './add-theatre/add-theatre.component';
import { AddScreenComponent } from './add-screen/add-screen.component';
import { AddShowComponent } from './add-show/add-show.component';
import { ViewMovieComponent } from './view-movie/view-movie.component';
import { ViewTheatreComponent } from './view-theatre/view-theatre.component';
import { ViewScreenComponent } from './view-screen/view-screen.component';
import { ViewShowComponent } from './view-show/view-show.component';



@NgModule({
  declarations: [
    AppComponent,
    ViewTheatreComponent,
   
    AddMoviComponent,
   
    
   
    AddTheatreComponent,
   
    
   
    AddScreenComponent,
   
    
   
    AddShowComponent,
   
    
   
    ViewMovieComponent,
   
    
   
    ViewScreenComponent,
   
    
   
    ViewShowComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule, 
    
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
