import {CommonActions, CommonTypes} from './common.action';
import { createSelector } from '@ngrx/store';
import { AppState } from '../index';
import { ICategoryModel } from '../../../main-module/models/category.model';

export class CommonState {
  isMenuOpen = false;
  categoryList: ICategoryModel[];
}

export function reducer(state = new CommonState(), action: CommonActions): CommonState {
  switch (action.type) {
    case CommonTypes.ToggleNavMenu:
      return {
        ...state,
        isMenuOpen: action.payload
      };
    case CommonTypes.SetCategoryList:
      return {
        ...state,
        categoryList: action.payload
      };
    case CommonTypes.AddNewCategory:
      return {
        ...state,
        categoryList: [...state.categoryList, action.payload]
      };
    default: {
      return state;
    }
  }
}

export const getCommonState = (state: AppState) => state.common;

export const getAllCategories = createSelector(getCommonState, (state: CommonState) => state.categoryList);
