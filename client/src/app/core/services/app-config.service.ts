import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { AppConfig } from "@app/models";
import { environment } from "src/environments/environment";

@Injectable()
export class AppConfigService {
    static settings: AppConfig;

    constructor(private http: HttpClient) { }

    loadConfiguration() {
        const configFileJsonUrl = `assets/config/config.${environment.name}.json`;

        return new Promise<void>((resolve, reject) => {
            this.http.get(configFileJsonUrl).toPromise().then((response: AppConfig) => {
                AppConfigService.settings = response;
                resolve();
            }).catch(error => {
                reject(
                    `Could not load file '${configFileJsonUrl}': ${JSON.stringify(error)}`
                )
            })
        });
    }
}