import { createAction, props } from '@ngrx/store';
import { LayoutModel } from '../core/models';

export const requestLoadLayoutData = createAction('[App Init] Request Load Layout Data');

export const loadLayoutDataSuccess = createAction('[App Init] Load Layout Data Success', props<{
    layoutData: LayoutModel
}>());

export const loadLayoutDataFailure = createAction('[App Init] Load Layout Data Failure', props<{
    errorMessage: string
}>());