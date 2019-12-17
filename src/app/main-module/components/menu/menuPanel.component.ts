import { ChangeDetectionStrategy, Component, ElementRef, HostListener, Input, ViewChild, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { select, Store } from '@ngrx/store';
import { AppState } from '../../../common/store';
import { AddNewCategory, ToggleNavMenuAction } from '../../../common/store/common/common.action';
import { MainResourceService } from '../../services/mainResource.service';
import { getAllCategories } from '../../../common/store/common/common.reducer';
import { ICategoryModel } from '../../models/category.model';
import {Observable} from 'rxjs';

@Component({
  selector: 'menu-panel',
  templateUrl: './menuPanel.component.html',
  styleUrls: ['./menuPanel.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class MenuPanelComponent implements OnInit {

  public categoryModel: FormGroup;
  public categoryList: Observable<ICategoryModel[]>;

  public isCreateNewCategory: boolean;
  @Input() isMenuOpen: boolean;
  @Input() toggleMenuButton: ElementRef;
  @ViewChild('menuWrapper', {static: false}) menuWrapper: ElementRef;
  @HostListener('document:click', ['$event.target']) onClick(targetElement) {
    const clickedInside = targetElement !== this.toggleMenuButton && targetElement !== this.menuWrapper.nativeElement;
    if (clickedInside) {
      this.store.dispatch( new ToggleNavMenuAction(!this.isMenuOpen));
    }
  }

  constructor(private store: Store<AppState>,
              private formBuilder: FormBuilder,
              private resourceService: MainResourceService) {
    this.isCreateNewCategory = false;
  }

  ngOnInit(): void {
    this.categoryModel = this.formBuilder.group({
      category: ['', Validators.required]
    });
    this.categoryList = this.store.pipe(select(getAllCategories));
  }

  public showCreateNewCategory(): void {
    this.isCreateNewCategory = true;
  }

  public hideCreateNewCategory(): void {
    this.isCreateNewCategory = false;
    this.categoryModel.reset();
  }

  public clearCategory(): void {
    this.categoryModel.reset();
  }

  public saveCategory() {
    this.resourceService.saveMenuCategory({ categoryName: this.categoryModel.controls['category'].value })
      .subscribe((data) => {
        this.store.dispatch(new AddNewCategory(data));
        this.categoryModel.reset();
      });
  }

}
