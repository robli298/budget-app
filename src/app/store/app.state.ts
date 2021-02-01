import { SocialMediaModel } from "@app/models";

// states purely related to the UI
export interface UIState {
    isLoading: boolean;
    errorMessage: string;
}

export interface StoreData {
    socialMedias: Array<SocialMediaModel>;
}

// root state
export interface ApplicationState {
    uIState: UIState,
    storeData: StoreData
}

export const initialState: ApplicationState = {
    uIState: {
        isLoading: false,
        errorMessage: null
    },
    storeData: {
        socialMedias: []
    }
}