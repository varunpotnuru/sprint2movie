import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ViewMovieComponent } from './view-movie/view-movie.component';
import { ViewTheatreComponent } from './view-theatre/view-theatre.component';
import { ViewScreenComponent } from './view-screen/view-screen.component';
import { ViewShowComponent } from './view-show/view-show.component';
import { AddMoviComponent } from './add-movie/add-movie.component';
import {AddTheatreComponent} from './add-theatre/add-theatre.component';
import {AddScreenComponent} from './add-screen/add-screen.component';
import {AddShowComponent} from './add-show/add-show.component';


const routes: Routes = [

{path:'viewMovie',component:ViewMovieComponent},
{path:'viewTheatre',component:ViewTheatreComponent},
{path:'viewScreen',component:ViewScreenComponent},
{path:'viewShow',component:ViewShowComponent},
{path:'addMovie',component:AddMoviComponent},
{path:'addTheatre',component:AddTheatreComponent},
{path:'addScreen',component:AddScreenComponent},
{path:'addShow',component:AddShowComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
