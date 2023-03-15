import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit{

  userCount!: number;
  enrollmentCount!:number;
  courseCount!: number;

  constructor(private http:HttpClient){}

 
  teacherCount: number = 5; // initial teacher count
 








  ngOnInit(): void {
    this.http.get<number>(`http://localhost:8080/students/count`).subscribe(count => this.enrollmentCount = count);
    this.http.get<number>(`http://localhost:8080/user/count`).subscribe(count => this.userCount = count);
    this.http.get<number>(`http://localhost:8080/classes/count`).subscribe(count => this.courseCount = count);
  }







}
