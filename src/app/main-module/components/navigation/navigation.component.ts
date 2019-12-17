import {ChangeDetectionStrategy, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Store} from '@ngrx/store';
import {AppState} from '../../../common/store';
import {ToggleNavMenuAction} from '../../../common/store/common/common.action';

@Component({
  selector: 'navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class NavigationComponent implements OnInit {

  @ViewChild('toggleMenuButton', {static: false}) toggleMenuButton: ElementRef;
  public isMenuOpen: boolean;

  constructor( private store: Store<AppState> ) { }

  ngOnInit(): void {
    this.store.select('common').subscribe(store => this.isMenuOpen = store.isMenuOpen);
  }

  public toggleMenu(): void {
    this.store.dispatch( new ToggleNavMenuAction(!this.isMenuOpen));
  }
}
