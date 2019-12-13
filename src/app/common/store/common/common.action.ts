import { Action } from '@ngrx/store';

export enum CommonTypes {
  ToggleNavMenu = '[COMMON] Toggle nev menu'
}

export class ToggleNavMenuAction implements Action {
  readonly type = CommonTypes.ToggleNavMenu;

  constructor(public payload: boolean) {}
}

export type CommonActions = ToggleNavMenuAction;
