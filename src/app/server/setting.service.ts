import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SettingService {

  private apiUrl = 'https://localhost:7130/api/TypeGame';

  constructor(private http: HttpClient) { }


  getTypeGameById(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }}
