import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import baseUrl from './helper';


@Injectable({
  providedIn: 'root'
})
export class ClassService {
 
  constructor(private http: HttpClient) { }

  public addClass(studentclass: any) {
    return this.http.post(`${baseUrl}/classes/`, studentclass);
  }

  public getClass() {
    return this.http.get(`${baseUrl}/classes/`, {});
  }

  public deleteClass(id: number) {
    return this.http.delete(`${baseUrl}/classes/${id}`);
  }

   
  public updateClass(id: number, studentclass: any){
    return this.http.put(`${baseUrl}/classes/${id}`, studentclass);
  }







}
