import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { CategoryPageComponent } from './components/categoryPage/categoryPage.component';

@NgModule({
  imports: [
    RouterModule,
    CommonModule
  ],
  declarations: [ CategoryPageComponent ]
})
export class CategoryModule { }
