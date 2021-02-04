import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SocialMediaModel } from '@app/models';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class SocialMediaService {
    constructor(private http: HttpClient) { }

    load(): Observable<Array<SocialMediaModel>> {
        return this.http.get<Array<SocialMediaModel>>('./assets/data/social-medias.json');
    }
}