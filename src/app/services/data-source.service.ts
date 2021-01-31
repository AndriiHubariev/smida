import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiResponseInterface } from '../models/apiResponse.interface';

@Injectable({
  providedIn: 'root',
})
export class DataSourceService {
  constructor(private http: HttpClient) {}

  public getTableData(): Observable<ApiResponseInterface[]> {
    return this.http.get<ApiResponseInterface[]>(
      'http://localhost:3000/api/table'
    );
  }
  public delete(id: number): Observable<any> {
    return this.http.delete<any>('http://localhost:3000/api/table/' + id);
  }
}
