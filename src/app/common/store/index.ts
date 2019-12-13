import {ActionReducerMap} from '@ngrx/store';
import * as common from './common/common.reducer';

export interface AppState {
  common: common.CommonState;
}

export const AppReducer: ActionReducerMap<AppState> = {
  common: common.reducer
};
