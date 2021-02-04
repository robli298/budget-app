import { Action, createReducer, on } from '@ngrx/store';
import * as fromApp from './app.actions';
import { ApplicationState } from './app.state';

export const appFeatureKey = 'app';

export const initialState: ApplicationState = {
  uIState: {
    isLoading: false,
    errorMessage: null
  },
  storeData: {
    socialMedias: []
  }
}

export const appReducer = createReducer(initialState, on(fromApp.requestLoadSocialMedias, state => ({
  ...state, uIState: {
    isLoading: true
  }
})), on(fromApp.loadSocialMediasSuccess, (state, { socialMedias }) => ({ ...state, storeData: { socialMedias: socialMedias } })));

export function reducer(state: ApplicationState | undefined, action: Action) {
  return appReducer(state, action);
}
