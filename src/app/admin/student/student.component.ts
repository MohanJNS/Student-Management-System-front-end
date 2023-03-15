  import { Component, OnInit } from '@angular/core';

  import { MatSnackBar } from '@angular/material/snack-bar';
  import { StudentService } from 'src/app/service/student.service';
  import { UserService } from 'src/app/service/user.service';
  import Swal from 'sweetalert2';

  @Component({
    selector: 'app-student',
    templateUrl: './student.component.html',
    styleUrls: ['./student.component.css']
  })
  export class StudentComponent implements OnInit {
    classId!: number;
    classes: any;
  

    constructor(private studentService:StudentService,private snack:MatSnackBar){} 
    


    // public student ={
    // studentName: '',
    // studentClass: '',
    // gender: '',
    // dob: '',
    // studentId: '',
    // fatherName: '',
    // motherName: '',
    // phoneNumber: '',
    // alternateNumber:'',
    // address: '',
    // // username: '',
    // // password: '',
    // image: '',
    // Admissiondate:'',

    // }

    public student = {
      studentName: '',
      studentClassId: '',
      className: '',
      section: '',
      gender: '',
      dob: '',
      studentId: '',
      fatherName: '',
      motherName: '',
      phoneNumber: '',
      alternateNumber: '',
      address: '',
      image: '',
      Admissiondate: '',
    };
   
  ngOnInit() {
    this.studentService.getClasses().subscribe((data: any) => {
      this.classes = data;
      
    });
  }


  // changeClass(event: any){
  //   this.classId = event.target.value;
  //   console.log(this.classId);
  // }
  
  changeClass(event: any) {
    const selectedClassId = event.target.value;
    const selectedClass = this.classes.find((c: { id: any; }) => c.id === selectedClassId);
  
    // assign the class id, class name and section to the student object
    this.student.studentClassId = selectedClass.id;
    this.student.className = selectedClass.className;
    this.student.section = selectedClass.section;
  }




    formSubmit(){

      this.student.className = this.classes.find((c: { id: any; }) => c.id === this.student.studentClassId)?.className;
      this.student.section = this.classes.find((c: { id: any; }) => c.id === this.student.studentClassId)?.section;
      console.log(this.student);
      if(this.student.studentName == '' || this.student.studentName == null){
        // alert('User is required !!');
        this.snack.open('User name is required','',{
  duration:3000,
  verticalPosition:'top',
  horizontalPosition:'right'
        });
        
        return;
      }

      //add user:userService

      this.studentService.addStudent(this.student).subscribe(
        (data: any) => {
          console.log(data);
          Swal.fire('Success','user is Registered','success');
          // clear form fields
          




         this.student.studentName = '';
         this.student.studentClassId= '';
         this. student.gender = '';
         this.student.dob= '';
         this.student. studentId= '';
         this.student.fatherName= '';
         this.student. motherName='';
         this.student. phoneNumber= '',
         this.student. alternateNumber='';
         this.student. address= '';
        //  this.student. username= '';
        //  this.student. password= '';
         this.student.image= '';
         this.student. Admissiondate='';

          
        },
        (error: any) => {
          console.error();
          this.snack.open('Something went wrong', '', {
            duration: 3000
          });
        }
      );
      
      }
    // public addRecord() {
    //   this.studentService.addStudent(this.student).subscribe(
    //     (data: any) => {
    //       console.log(data);
    //       Swal.fire('Success', 'User is registered', 'success');
    //       window.location.reload();
    //     },
    //     (error: any) => {
    //       console.error();
    //       this.snack.open('Something went wrong', '', {
    //         duration: 3000
    //       });
    //     }
    //   );
    // }
    

  

    }









