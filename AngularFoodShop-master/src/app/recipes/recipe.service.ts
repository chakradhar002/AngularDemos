import { Recipe } from './recipe.model';
import {Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Subject } from 'rxjs';
@Injectable()

export class RecipeService {
    recipesChanged= new Subject<Recipe[]>();
  
    private recipes: Recipe[] = [
        new Recipe('Burger King1',
         'Burger',
          'https://www.seriouseats.com/recipes/images/2015/07/20150702-sous-vide-hamburger-anova-primary-1500x1125.jpg',
          
          [
              new Ingredient('Meat',100),
              new Ingredient('Salad', 2)
          ]),

    new Recipe('Burger King2',
         'Burger',
          'https://www.seriouseats.com/recipes/images/2015/07/20150702-sous-vide-hamburger-anova-primary-1500x1125.jpg',
          
          [
              new Ingredient('Meat',100),
              new Ingredient('Salad', 2)
          ]),
		  
        new Recipe('Pizza',
         'Pizza', 
         'https://www.cicis.com/wp-content/uploads/2019/04/pizza_categoryheader.png',
         [
             new Ingredient('Tuna', 200),
             new Ingredient('Pepper', 50)
         ])
      ];
  

      constructor(private slService: ShoppingListService )
      {}
      getRecipes() {
          return this.recipes.slice();
      }

      getRecipe(index: number){
          return this.recipes[index];
      }
      addIngredientsToShoppingList(ingredients: Ingredient[]) {
this.slService.addIngredients(ingredients);
      }
      addRecipe(recipe: Recipe){
this.recipes.push(recipe);
this.recipesChanged.next(this.recipes.slice());
      }
      updateRecipe(index: number, newRecipe: Recipe) {
this.recipes[index]= newRecipe;
this.recipesChanged.next(this.recipes.slice());
      }

      deleteRecipe(index: number) {
this.recipes.splice(index, 1);
this.recipesChanged.next(this.recipes.slice());
      }
}