import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import baseUrl from './helper';
import { Notice } from './notice';

@Injectable({
  providedIn: 'root'
})
export class NoticeService {



  constructor(private http: HttpClient) { }


//   createNotice(notice: Notice): Observable<Object> {
//     return this.http.post(`${baseUrl}/notices/`,notice);
//   }

//   getNotice(id: number): Observable<Notice> {
//     return this.http.get<Notice>(`${baseUrl}/notices/`, {});
//   }

//   updateNotice(id: number, notice: Notice): Observable<Object> {
//     //return this.http.put(`${this.baseURL}/${id}`, employee);
//     return this.http.put(`${baseUrl}/notices/${id}`, notice);
//   }

//   deleteNotice(id: number): Observable<Object> { 
//     return this.http.delete(`${baseUrl}/notices/${id}`);
// }


public createNotice(notice: any){
  return this.http.post(`${baseUrl}/public_notices/`,notice);
  }

  public getNotice(){
    return this.http.get(`${baseUrl}/public_notices/`, {});
  }



  





  public deleteNotice(id: number){
    return this.http.delete(`${baseUrl}/public_notices/${id}`);
  }
  
  public updateNotice(id: number, notice: any){
    return this.http.put(`${baseUrl}/public_notices/${id}`, notice);
  }
      



}
