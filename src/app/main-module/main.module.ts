import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { MainPageComponent } from './components/mainPage/mainPage.component';
import { NavigationComponent } from './components/navigation/navigation.component';

@NgModule({
  imports: [ RouterModule ],
  declarations: [
    MainPageComponent,
    NavigationComponent
  ]
})
export class MainModule { }
