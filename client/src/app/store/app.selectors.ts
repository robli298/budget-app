import { createFeatureSelector, createSelector } from "@ngrx/store";
import { appFeatureKey } from "./app.reducer";
import { ApplicationState } from "./app.state";

const selectAppFeatureState = createFeatureSelector<ApplicationState>(appFeatureKey);

export const selectSocialMedias = createSelector(selectAppFeatureState, state => {
    return state.storeData.socialMedias;
});