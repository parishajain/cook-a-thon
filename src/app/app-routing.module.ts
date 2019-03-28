import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RecipeDetailComponent } from './components/recipe-detail/recipe-detail.component';
import { RegisterComponent } from './components/register/register.component';
import { SearchComponent } from './components/search/search.component';
import { AboutComponent } from './components/about/about.component';
import { DirectiveDemoComponent} from './components/directive-demo/directive-demo.component';
import {NgifDirectiveDemoComponent} from  './components/ngif-directive-demo/ngif-directive-demo.component';
import {NgStyleDirectiveDemoComponent} from './components/ng-style-directive-demo/ng-style-directive-demo.component';
import {NgClassDemoComponent} from './components/ng-class-demo/ng-class-demo.component';

const routes: Routes = [ 
  {path:"", redirectTo:"home", pathMatch:'full'},
  {path: 'find', redirectTo:'search'},
  {path:'home', component: HomeComponent},
  {path:'search', component: SearchComponent},
  {path:'login', component: LoginComponent},
  {path:'register', component: RegisterComponent},
  /*{path:'about', component: AboutComponent},*/
  {path:'about', component: AboutComponent},
  {path:'recipeDetail/:recipeID', component: RecipeDetailComponent},
  {path: 'directiveDemo', component: DirectiveDemoComponent},
  {path: 'ngIfDirectiveDemo', component: NgifDirectiveDemoComponent},
  {path: 'ngClassDemo', component: NgClassDemoComponent},

  {path: 'ngStyleDirectiveDemo', component: NgStyleDirectiveDemoComponent},
  {path:"**", component: HomeComponent}
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
