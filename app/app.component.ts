import { Component } from '@angular/core';
import {AddRecipyForm} from './components/add-recipy-form.component'
@Component({
  selector: 'my-app',
  template: 
  `
  <add-recipy-form></add-recipy-form>
  `
  directives: [AddRecipyForm]
})
export class AppComponent { }
