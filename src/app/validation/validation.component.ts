import { Component } from '@angular/core';


@Component({
  selector: 'app-validation',
  templateUrl: './validation.component.html',
  styleUrls: ['./validation.component.css']
})
export class ValidationComponent {
  
  model : UserModel = {
    firstName: '',
    eMail: '',
    password: ''
  };
  get diagnostic() { return JSON.stringify(this.model); }
  createUser() {
    alert('User created!');
  }
  
}
export class UserModel {
  firstName! : string;
  eMail!: string;
  password!: string;
}