import {ChangeDetectionStrategy, Component} from '@angular/core';

@Component({
  selector: 'navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class NavigationComponent {

  public openMenu(): void {
    console.log('open menu');
  }
}
