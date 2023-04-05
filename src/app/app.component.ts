import { Component, OnInit  } from '@angular/core';
import { PostService } from './services/post.service';
import { Router, ActivatedRoute } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';
import { FormGroup, FormControl } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
title = 'angular122';

products:any = [];
  
constructor(private service:PostService,   
  private router:Router,
  private activerout:ActivatedRoute,
  private _sanitizer: DomSanitizer) { }

ngOnInit(){
  this.activerout.params.subscribe((allparam:any)=>{
  this.service.getPosts(allparam).subscribe( res =>{
    console.log(res);
    this.products = res;
  });
})

}


}
