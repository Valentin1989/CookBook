import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../../common/store';
import { Observable } from 'rxjs';
import {CommonState} from '../../../common/store/common/common.reducer';

@Component({
  selector: 'main',
  templateUrl: './mainPage.component.html',
  styleUrls: ['./mainPage.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class MainPageComponent implements OnInit {
  public isMenuOpen: boolean;

  constructor(private store: Store<AppState>) {

  }

  ngOnInit(): void {
    this.store.select('common').subscribe(store => this.isMenuOpen = store.isMenuOpen);
  }
}
