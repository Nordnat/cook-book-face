
import { Component, Input } from '@angular/core';
import { IngridientFormGroup } from './ingridient-form-group.component';

@Component({
    selector: 'add-recipe-form',
    templateUrl : './app/recipes/templates/add-recipe-form.template.html',
    directives: [IngridientFormGroup]
})

export class AddRecipeForm {
    @Input() ingridientsCount = 0;
    @Input() myIngridients = 0;

    onClickAdd() {
        this.myIngridients++;
    }
}