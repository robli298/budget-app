import { LayoutModel } from "@app/models";

export interface UIState {
    isLoading: boolean,
    errorMessage: string
}

export interface StoreData {
    layoutData: LayoutModel
}

export interface ApplicationState {
    uIState:UIState;
    storeData: StoreData
}

export const initialApplicationState: ApplicationState = {
    uIState: {
        errorMessage: null,
        isLoading: false
    },
    storeData: {
        layoutData: undefined
    }
}