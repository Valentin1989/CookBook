import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../../common/store';

import { MainResourceService } from '../../services/mainResource.service';
import { SetCategoryList } from '../../../common/store/common/common.action';

@Component({
  selector: 'main',
  templateUrl: './mainPage.component.html',
  styleUrls: ['./mainPage.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class MainPageComponent implements OnInit {
  public isMenuOpen: boolean;

  constructor(private store: Store<AppState>,
              private resourceService: MainResourceService) {
  }

  ngOnInit(): void {
    this.store.select('common').subscribe(store => this.isMenuOpen = store.isMenuOpen);
    this.resourceService.getAllCategories()
      .subscribe(data => {
        this.store.dispatch(new SetCategoryList(data));
      });
  }
}
