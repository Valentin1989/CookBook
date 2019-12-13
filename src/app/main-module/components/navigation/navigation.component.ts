import {ChangeDetectionStrategy, Component} from '@angular/core';
import {Store} from '@ngrx/store';
import {AppState} from '../../../common/store';
import {ToggleNavMenuAction} from '../../../common/store/common/common.action';

@Component({
  selector: 'navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class NavigationComponent {

  constructor( private store: Store<AppState> ) { }

  public openMenu(): void {
    console.log('open menu');
    this.store.dispatch( new ToggleNavMenuAction(true));
  }
}
