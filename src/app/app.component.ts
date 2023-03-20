import { Component, OnInit } from '@angular/core';

declare let window:any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'angular122';
  formModal:any;

  ngOnInit(): void {
  this.formModal = new window.bootstrap.Modal(
  document.getElementById("exampleModal")
);
  }
  openModal(){
    this.formModal.show();
  }
  closeModal(){
    this.formModal.hide();
  }
  
}
