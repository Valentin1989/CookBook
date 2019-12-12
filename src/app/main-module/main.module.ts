import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { MainPageComponent } from './components/mainPage/mainPage.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { MenuPanelComponent } from './components/menu/menuPanel.component';

@NgModule({
  imports: [ RouterModule ],
  declarations: [
    MainPageComponent,
    NavigationComponent,
    MenuPanelComponent
  ]
})
export class MainModule { }
