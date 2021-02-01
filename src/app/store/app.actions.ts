import { SocialMediaModel } from "@app/models";
import { createAction, props } from "@ngrx/store";

export const requestLoadSocialMedias = createAction('[Init App] Request Load Social Medias');

export const loadSocialMediasSuccess = createAction('[Init App] Load Social Medias Success', props<{ socialMedias: Array<SocialMediaModel> }>());

export const loadSocialMediasFailure = createAction('[Init App] Load Social Medias Failure', props<{ errorMessage: string }>());