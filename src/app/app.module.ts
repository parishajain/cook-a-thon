import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RecipeDetailComponent } from './components/recipe-detail/recipe-detail.component';
import { RegisterComponent } from './components/register/register.component';
import { SearchComponent } from './components/search/search.component';
import { AboutComponent } from './components/about/about.component';
//import {Recipes} from "../models/recipes";
//import {RecipeDetails} from './recipe-details';
import {FormsModule} from "@angular/forms";
import { ConvertToHoursPipe } from './Pipes/convert-to-hours.pipe';
import { ConvertPipe } from './Pipes/convert.pipe';
import { DirectiveDemoComponent } from './components/directive-demo/directive-demo.component';
import { NgifDirectiveDemoComponent } from './components/ngif-directive-demo/ngif-directive-demo.component';
import { NgStyleDirectiveDemoComponent } from './components/ng-style-directive-demo/ng-style-directive-demo.component';
import { NgClassDemoComponent } from './components/ng-class-demo/ng-class-demo.component';
import { ImageOverlayDirective } from './directives/image-overlay.directive';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    NavbarComponent,
    RecipeDetailComponent,
    RegisterComponent,
    SearchComponent,
    AboutComponent,
    ConvertToHoursPipe,
    ConvertPipe,
    DirectiveDemoComponent,
    NgifDirectiveDemoComponent,
    NgStyleDirectiveDemoComponent,
    NgClassDemoComponent,
    ImageOverlayDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
