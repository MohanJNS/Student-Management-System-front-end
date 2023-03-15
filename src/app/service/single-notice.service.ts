import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import baseUrl from './helper';
import { Notice } from './notice';

@Injectable({
  providedIn: 'root'
})
export class SingleNoticeService {

  

  constructor(private http:HttpClient) { }

  public getNotice(){
    return this.http.get(`${baseUrl}/notice/`, {});
  }


  
  public getClasses() {
    return this.http.get(`${baseUrl}/classes/`, {});
  }


  public createNotice(notice: any){
    return this.http.post(`${baseUrl}/notice/`,notice);
    }

    public getStudents(){
      return this.http.get(`${baseUrl}/students/`, {});
    }

    // public getNoticeByStudentId(studentId: number) {
    //   return this.http.get(`${baseUrl}/notice?studentId=${studentId}`);
    // }
    
    public getNoticesByStudentId(studentId: number) {
      return this.http.get(`${baseUrl}/notice/${studentId}/notices`);
    }

    public getNoticesByStudentclassId(studentClassId: number) {
      return this.http.get(`${baseUrl}/notice/${studentClassId}/classes`);
    }


    public getNoticesByUserId(userId: number) {
      return this.http.get(`${baseUrl}/notice/user/${userId}`);
    }


   public getUserById(id:number){
   return this.http.get(`${baseUrl}/user/users/${id}`);
}

    
    public deleteNotice(id: number){
      return this.http.delete(`${baseUrl}/notice/${id}`);
    }
    
    public updateNotice(id: number, notice: any){
      return this.http.put(`${baseUrl}/notice/${id}`, notice);
    }
        


    



}
