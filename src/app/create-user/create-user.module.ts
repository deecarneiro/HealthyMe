import { NgModule, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, FormControl, FormGroup, Validators } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreateUserPageRoutingModule } from './create-user-routing.module';

import { CreateUserPage } from './create-user.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CreateUserPageRoutingModule
  ],
  declarations: [CreateUserPage]
})
export class CreateUserPageModule implements OnInit  {
  name : any;

  constructor() { 

  }

  ngOnInit() { 
    this.name = new FormControl('Dayana')

  }

}
