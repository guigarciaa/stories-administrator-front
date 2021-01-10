import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RegisterComponent } from './register.component';
import { RegisterRoutingModule } from './register-routing.module';

@NgModule({
  declarations: [
    RegisterComponent
  ],
  imports: [
    CommonModule,
    RegisterRoutingModule
  ],
  providers: [],
  bootstrap: []
})
export class RegisterModule { }
