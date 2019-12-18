import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CategoryPageComponent } from './components/categoryPage/categoryPage.component';
import { CreateRecipeComponent } from './components/createRecipe/createRecipe.component';

@NgModule({
  imports: [
    RouterModule,
    CommonModule,
    ReactiveFormsModule,
    FormsModule
  ],
  declarations: [
    CategoryPageComponent,
    CreateRecipeComponent
  ]
})
export class CategoryModule { }
