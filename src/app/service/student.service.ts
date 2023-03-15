import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import baseUrl from './helper';
import { Student } from './Student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {


  constructor(private http:HttpClient) { }

  
  public addStudent(student: any){
    return this.http.post(`${baseUrl}/students/`,student);
    }

    public getStudent(){
      return this.http.get(`${baseUrl}/students/`, {});

    }


    getStudents(studentId: number): Observable<Student> {
      return this.http.get<Student>(`http://localhost:8080/students/${studentId}`);
    }
    

    public deleteStudent(id: number){
      return this.http.delete(`${baseUrl}/students/${id}`);
    }
    
    public updateStudent(id: number, student: any){
      return this.http.put(`${baseUrl}/students/${id}`, student);
    }
        


    public getClasses() {
      return this.http.get(`${baseUrl}/classes/`, {});
    }
  


    public getSections(className: string) {
      return this.http.get(`${baseUrl}/classes/sections`, { params: { className } });
    }
    
  




}
