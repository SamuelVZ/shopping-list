import { Ingredient } from '../../shared/models/Ingredient.model';
export interface Recipie {
  name: string;
  description: string;
  imagePath: string;
  ingredients: Ingredient[];
}
