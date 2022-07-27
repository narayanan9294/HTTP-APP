import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { JokesComponent } from './jokes/jokes.component';
import { LoginComponent } from './login/login.component';
import { MoviesComponent } from './movies/movies.component';
import { NewsComponent } from './news/news.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { WeatherComponent } from './weather/weather.component';

const routes: Routes = [{
  path:"",component: LoginComponent
},{
  path:'weather', component: WeatherComponent,canActivate:[AuthGuard]
},
{
  path: 'news', component: NewsComponent, canActivate:[AuthGuard]
},{
  path:'movies', component: MoviesComponent, canActivate:[AuthGuard]
},{
  path:'jokes', component: JokesComponent, canActivate:[AuthGuard]
},{
  path: '**', component: NotfoundComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
