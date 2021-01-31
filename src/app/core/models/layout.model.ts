import { SocialMediaModel } from "./social-media.model";

export interface LayoutModel {
    alerts: [
        { class: string }
    ];
    version: number;
    socialMedias: Array<SocialMediaModel>;
}