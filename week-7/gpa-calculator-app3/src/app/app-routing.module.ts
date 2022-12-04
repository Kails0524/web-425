
  // Title: Exercise 6.3 - Layouts
  // Author: Professor Krasso
  // Date: 27 Nov 2022
  // Modified By: Kailee Stephens
  // Description: GPA Calculator App
  // Code Attribution: Code and instruction provided by Professor Krasso's videos and assignment docs.

  import { NgModule } from '@angular/core';
  import { RouterModule, Routes } from '@angular/router';
  import { BaseLayoutComponent } from './base-layout/base-layout.component';
  import { HomeComponent } from './home/home.component';
  import { AuthLayoutComponent } from './auth-layout/auth-layout.component';
  import { NotFoundComponent } from './not-found/not-found.component';
  import { SignInComponent } from './sign-in/sign-in.component';
  import { SignInGuard } from './sign-in.guard'
  
  const routes: Routes = [
    {
      path: '',
      component: BaseLayoutComponent,
      children: [
        {path:'',
        component: HomeComponent
        }
      ],
      canActivate: [SignInGuard]
    },
    {
      path: 'session',
      component: AuthLayoutComponent,
      children: [
        {
          path: 'not-found',
          component: NotFoundComponent
        },
        {
          path: 'sign-in',
          component: SignInComponent
        }
      ]
    },
    {
      path: '**',
      redirectTo: 'session/not-found'
    }
  ];
  
  @NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }