import { Component } from '@angular/core';
import {AddRecipeForm} from './recipes/components/add-recipe-form.component'
import { IngridientFormGroup } from './recipes/components/ingridient-form-group.component';

@Component({
  selector: 'my-app',
  template: 
  `
  <add-recipe-form></add-recipe-form>
  `,
  directives: [AddRecipeForm, IngridientFormGroup]
})
export class AppComponent { }
