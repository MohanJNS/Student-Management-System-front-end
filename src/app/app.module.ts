import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MaterialModule} from 'src/material.module';
import {HttpClientModule} from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';

import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { SignupComponent  } from './signup/signup.component';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { MatCardModule } from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { AuthInterceptorProviders } from './service/auth.interceptor';

import { UserDashboardComponent } from './user/user-dashboard/user-dashboard.component';
import { ProfileComponent } from './profile/profile.component';

import { DashboardComponent } from './admin/dashboard/dashboard.component';
import {MatListModule} from '@angular/material/list';
import { SidebarComponent  } from './admin/sidebar/sidebar.component';
import { WelcomeComponent } from './admin/welcome/welcome.component';
import { StudentComponent } from './admin/student/student.component';
import { ViewStudentsComponent } from './admin/view-students/view-students.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button';
import { EditDialogComponent } from './edit-dialog/edit-dialog.component';
import { ConfirmationDialogComponent } from './confirmation-dialog/confirmation-dialog.component';
import { ClassComponent } from './admin/class/class.component';
import { EditStudentComponent } from './admin/edit-class/edit-student.component';
import {MatMenuModule} from '@angular/material/menu';
import { MatSelectModule } from '@angular/material/select';
import { EditClassDialogComponent } from './admin/edit-class-dialog/edit-class-dialog.component';
import { NoticeComponent } from './admin/notice/notice.component';
import { EditNoticeComponent } from './admin/view-notice/edit-notice.component';
import { EditNoticeDialogComponent } from './admin/edit-notice-dialog/edit-notice-dialog.component';
import { UserpanelComponent } from './user/userpanel/userpanel.component';
import { UserSidebarComponent } from './user/user-sidebar/user-sidebar.component';
import { UserNoticeComponent } from './user/user-notice/user-notice.component';
import { UserWelcomeComponent } from './user/user-welcome/user-welcome.component';
import { UserProfileComponent } from './user/user-profile/user-profile.component';
import { SingleNoticeComponent } from './admin/individual/single-notice/single-notice.component';
import { NoticeformComponent } from './noticeform/noticeform.component';
import { UserViewpublicNoticeComponent } from './user/user-viewpublic-notice/user-viewpublic-notice.component';
import { EditSingleNoticeComponent } from './admin/individual/single-notice/edit-single-notice/edit-single-notice.component';
import { EditSingleNoticeDialogComponent } from './admin/individual/single-notice/edit-single-notice-dialog/edit-single-notice-dialog.component';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { ClassNoticeComponent } from './user/class-notice/class-notice.component';
import { MatBadgeModule } from '@angular/material/badge';
import { PiechartComponent } from './piechart/piechart.component';
import { CombinedNoticeComponent } from './combined-notice/combined-notice.component';
import { DatePipe } from '@angular/common';
import { StudentdetailsComponent } from './studentdetails/studentdetails.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatExpansionModule} from '@angular/material/expansion';
import { HeaderComponent } from './header/header.component';
import { PageWithNavbarComponent } from './page-with-navbar/page-with-navbar.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    SignupComponent,
    UserDashboardComponent,
    ProfileComponent,

    DashboardComponent,
     SidebarComponent,
     WelcomeComponent,
     StudentComponent,
     ViewStudentsComponent,
     EditDialogComponent,
     ConfirmationDialogComponent,
     ClassComponent,
     EditStudentComponent,
     EditClassDialogComponent,
     NoticeComponent,
     EditNoticeComponent,
     EditNoticeDialogComponent,
     UserpanelComponent,
     UserSidebarComponent,
     UserNoticeComponent,
     UserWelcomeComponent,
     UserProfileComponent,
     SingleNoticeComponent,
     NoticeformComponent,
     UserViewpublicNoticeComponent,
     EditSingleNoticeComponent,
     EditSingleNoticeDialogComponent,
     ClassNoticeComponent,
     PiechartComponent,
     CombinedNoticeComponent,
     StudentdetailsComponent,
     HeaderComponent,
     PageWithNavbarComponent,


     
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MaterialModule,
    HttpClientModule,
    FormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatSnackBarModule,
    MatCardModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatTableModule,
    MatButtonModule,
    MatMenuModule,
    MatSelectModule,
    MatButtonToggleModule,
    MatBadgeModule,
    DatePipe,
    MatSidenavModule,
    MatExpansionModule,
   

    
   
  
    


    ToastrModule.forRoot()
  ],
  providers: [AuthInterceptorProviders ],
  bootstrap: [AppComponent]
})
export class AppModule { }
