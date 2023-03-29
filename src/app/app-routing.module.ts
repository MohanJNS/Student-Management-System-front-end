import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClassComponent } from './admin/class/class.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { EditClassDialogComponent } from './admin/edit-class-dialog/edit-class-dialog.component';
import { EditNoticeDialogComponent } from './admin/edit-notice-dialog/edit-notice-dialog.component';
import { EditNoticeComponent } from './admin/view-notice/edit-notice.component';
import { NoticeComponent } from './admin/notice/notice.component';
import { StudentComponent } from './admin/student/student.component';
import { ViewStudentsComponent } from './admin/view-students/view-students.component';
import { WelcomeComponent } from './admin/welcome/welcome.component';


import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { AdminGuard } from './service/admin.guard';
import { NormalGuard } from './service/normal.guard';
import { SignupComponent } from './signup/signup.component';
import { UserDashboardComponent } from './user/user-dashboard/user-dashboard.component';
import { UserpanelComponent } from './user/userpanel/userpanel.component';
import { UserSidebarComponent } from './user/user-sidebar/user-sidebar.component';
import { UserNoticeComponent } from './user/user-notice/user-notice.component';
import { UserWelcomeComponent } from './user/user-welcome/user-welcome.component';
import { UserProfileComponent } from './user/user-profile/user-profile.component';
import { SingleNoticeComponent } from './admin/individual/single-notice/single-notice.component';
import { AuthGuard } from './guard/auth.guard';
import { UserViewpublicNoticeComponent } from './user/user-viewpublic-notice/user-viewpublic-notice.component';
import { EditSingleNoticeComponent } from './admin/individual/single-notice/edit-single-notice/edit-single-notice.component';
import { EditSingleNoticeDialogComponent } from './admin/individual/single-notice/edit-single-notice-dialog/edit-single-notice-dialog.component';
import { ClassNoticeComponent } from './user/class-notice/class-notice.component';
import { CombinedNoticeComponent } from './combined-notice/combined-notice.component';



const routes: Routes = [
  { path: 'signup', component: SignupComponent, pathMatch: 'full' },
  { path: 'login', component: LoginComponent, pathMatch: 'full' },
  {
    path: 'admin',
    component: DashboardComponent,
    children: [
      { path: 'profile', component: ProfileComponent },
      { path: 'view-students', component: ViewStudentsComponent },
      { path: 'student', component: StudentComponent },
      { path: 'class', component: ClassComponent },
      { path: 'edit-dialog', component: EditClassDialogComponent },
      { path: 'notice', component: NoticeComponent },
      { path: 'edit-notice-dialog', component: EditNoticeComponent },
      { path: 'single-notice', component: SingleNoticeComponent },
      { path: 'edit-single-notice', component: EditSingleNoticeComponent },
      { path: 'welcome', component: WelcomeComponent },
    ],
    canActivate: [AdminGuard],
  },
  
  {
    path: 'user-dashboard',
    component: UserDashboardComponent,
    children: [
      { path: 'userpanel', component: UserpanelComponent },
      { path: 'user-sidebar', component: UserSidebarComponent },
      { path: 'user-viewpublic-notice', component: UserViewpublicNoticeComponent },
      { path: 'user-notice', component: UserNoticeComponent },
      { path: 'user-class-notice', component: ClassNoticeComponent },
      { path: 'user-combined-notice', component: CombinedNoticeComponent },
      { path: '', component: UserWelcomeComponent },
      { path: 'user-profile', component: UserProfileComponent },
    ],
    canActivate: [NormalGuard],
  },
];


//  {component:HomeComponent,path:''}
 



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
