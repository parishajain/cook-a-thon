import { Injectable } from '@angular/core';
import {Recipes} from "../models/recipes";
import {RecipeDetails} from "../models/recipe-details";
//import {RecipeDetails} from './recipe-details';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }
    getRecipes() : Promise<RecipeDetails[]>{
      return Promise.resolve(Recipes);
    }
  }

