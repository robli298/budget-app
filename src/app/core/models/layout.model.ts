
export interface LayoutModel {
    navbar: {
        alerts: [
            {class: string}
        ]
    }
    footer: { version: number, socialMedias: Array<{ url: string, iconClass: string }> }
}

