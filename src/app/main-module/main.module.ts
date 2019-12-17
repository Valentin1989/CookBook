import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { ClickOutsideDirective } from '../common/directives/clickOutside.directive';

import { MainPageComponent } from './components/mainPage/mainPage.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { MenuPanelComponent } from './components/menu/menuPanel.component';

import { MainResourceService } from './services/mainResource.service';

@NgModule({
  imports: [
    RouterModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  declarations: [
    MainPageComponent,
    NavigationComponent,
    MenuPanelComponent,
    ClickOutsideDirective
  ],
  providers: [ MainResourceService ]
})
export class MainModule { }
