import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RouterModule } from '@angular/router';
import { loginRoutes } from './login.routes';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(loginRoutes),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [LoginComponent],
})
export class LoginModule {}
