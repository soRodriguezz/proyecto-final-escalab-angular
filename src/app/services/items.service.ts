import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Items } from '../interfaces/items.interface';

@Injectable({
  providedIn: 'root'
})
export class ItemsService {

  constructor(
    private _http: HttpClient
  ) { }

  getItems(): Observable<Items> {
    return this._http.get<Items>(`${environment.URL_BASE}/12.3.1/data/es_ES/item.json`)
      .pipe(
        map((res: any) => {
          return res.data;
        })
      );
  }
}
