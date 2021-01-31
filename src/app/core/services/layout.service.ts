import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LayoutModel } from '@app/models';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class LayoutService {
    constructor(private http: HttpClient) { }

    load(): Observable<LayoutModel> {
        return this.http.get<LayoutModel>('./assets/data/layout-settings.json');
    }
}