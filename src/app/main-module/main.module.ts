import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { MainPageComponent } from './components/mainPage/mainPage.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { MenuPanelComponent } from './components/menu/menuPanel.component';

@NgModule({
  imports: [ RouterModule, CommonModule ],
  declarations: [
    MainPageComponent,
    NavigationComponent,
    MenuPanelComponent
  ]
})
export class MainModule { }
