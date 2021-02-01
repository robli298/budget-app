import { Action, createReducer, on } from '@ngrx/store';
import { loadSocialMediasSuccess, requestLoadSocialMedias } from './app.actions';
import { ApplicationState, initialState } from './app.state';

export const appFeatureKey = 'app';

export const appReducer = createReducer(initialState, on(requestLoadSocialMedias, state => ({
  ...state, uIState: {
    isLoading: true
  }
})), on(loadSocialMediasSuccess, (state, { socialMedias}) => ({...state, storeData: {socialMedias: socialMedias}})));

export function reducer(state: ApplicationState | undefined, action: Action) {
  return appReducer(state, action);
}
