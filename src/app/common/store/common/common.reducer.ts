import { AppState } from '../index';
import { CommonActions, CommonTypes } from './common.action';

export class CommonState {
  isMenuOpen = false;
}

export function reducer(state = new CommonState(), action: CommonActions): CommonState {
  switch (action.type) {
    case CommonTypes.ToggleNavMenu:
      return {
        ...state,
        isMenuOpen: action.payload
      };
    default: {
      return state;
    }
  }
}
