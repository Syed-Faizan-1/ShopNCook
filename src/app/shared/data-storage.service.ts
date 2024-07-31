import { HttpClient, JsonpInterceptor } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { RecipeService } from "../components/recipeBook/recipe.service";
import { Recipe } from "../components/recipeBook/recipe.modal";
import { map } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class DataStorageService {
    constructor(private http: HttpClient, private recipeService: RecipeService) { }

    storeRecipes() {
        const recipes = this.recipeService.getRecipes();
        this.http.put('https://shopncook-97577-default-rtdb.firebaseio.com/recipes.json', recipes)
            .subscribe(res => {
                console.log(res)
            });
    }
    fetchRecipes() {
        this.http.get<Recipe[]>('https://shopncook-97577-default-rtdb.firebaseio.com/recipes.json')
            .pipe(map(recipes => {
                return recipes.map(recipe => {
                    return { ...recipe, ingredients: recipe.ingredients ? recipe.ingredients : [] }
                })
            }))
            .subscribe(res => {
                this.recipeService.setRecipes(res)
            })
    }
}