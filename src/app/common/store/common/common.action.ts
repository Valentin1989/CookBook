import { Action } from '@ngrx/store';

export enum CommonTypes {
  ToggleNavMenu = '[COMMON] Toggle nev menu',
  SetCategoryList = '[COMMON] Set category list',
  AddNewCategory = '[COMMON] Add new category'
}

export class ToggleNavMenuAction implements Action {
  readonly type = CommonTypes.ToggleNavMenu;

  constructor( public payload: boolean ) {}
}

export class SetCategoryList implements Action {
  type = CommonTypes.SetCategoryList;

  constructor( public payload ) {}
}

export class AddNewCategory implements Action {
  type = CommonTypes.AddNewCategory;

  constructor( public payload ) {}
}

export type CommonActions = ToggleNavMenuAction |
                            SetCategoryList |
                            AddNewCategory;
