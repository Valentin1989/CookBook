import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'main',
  templateUrl: './mainPage.component.html',
  styleUrls: ['./mainPage.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class MainPageComponent { }
