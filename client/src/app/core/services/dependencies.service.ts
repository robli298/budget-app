import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";

@Injectable({
    providedIn: 'root'
})
export class DependenciesService {

    readonly dataUrl: string = "./assets/data/dependencies.txt";

    constructor(private http: HttpClient) { }

    loadData(): Observable<Record<string, Array<string>>> {
        return this.http.get(this.dataUrl, { responseType: 'text' }).pipe(map(response => {

            let result: Record<string, Array<string>> = {};

            const rows = !!response ? response.split('\n') : [];
            const rowHeader = !!rows[0] ? rows[0].split(/ {2,}/) : [];
            const rowData = rows.slice(1);

            if (rowHeader.length > 0 ) {
                result = rowHeader.reduce((currentValue, previousValue) => {
                    return { ...currentValue, [previousValue]: [] };
                }, {});
            }

            rowData.forEach((rowString) => {
                let row = rowString.split(/ {2,}/);
                row.forEach((column, i) => {
                    result[rowHeader[i]].push(column);
                });
            });
            return result;
        }
        ));
    }
}



