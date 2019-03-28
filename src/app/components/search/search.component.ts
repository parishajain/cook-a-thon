import { Component, OnInit } from '@angular/core';
import {DataService} from "../services/data.service";
import { RecipeDetails } from '../models/recipe-details';
//import { ConvertToHoursPipe } from 'src/app/Pipes/convert-to-hours.pipe';

//import {Recipes} from "../models/recipes";
//import {RecipeDetails} from "../models/recipe-details";

 
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  recipes: RecipeDetails[];
  widthPx = 50;
 
  
  constructor(private dataService: DataService) {

   }
  showImage = true;
  toggleImage() : void {
        this.showImage = !this.showImage;
    }
     private _listFilter = 'Demo';
     filteredList: RecipeDetails[];
     set listFilter(valueChanged: string){
      this._listFilter = valueChanged;
      
      this.filterList();
      this.filteredList = this._listFilter ? this.filteredList : this.recipes;
    
    }
    get listFilter(){
      return this._listFilter;
    }
    filterList(){
      this.filteredList = this.recipes.filter((recipe: RecipeDetails) =>{
       return  recipe.label.toLowerCase().indexOf(this._listFilter.toLowerCase()) !== -1;
    });
    
  }

    
  ngOnInit() {
    
    this.dataService.getRecipes().then(recipes => {
      this.recipes = recipes;
     // console.log(this.recipes);
      this.filteredList = this.recipes;
    }
    );
  }

}
