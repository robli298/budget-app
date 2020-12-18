import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LayoutModel } from '../../shared/models/layout.model';

@Injectable({
    providedIn: 'root'
})
export class StateLayoutService {
    constructor(private http: HttpClient) { }

    load(): Observable<LayoutModel> {
        return this.http.get<LayoutModel>('./assets/data/layout-settings.json');
    }
}