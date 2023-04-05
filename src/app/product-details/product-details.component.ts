import { Component, OnInit } from '@angular/core';
import { Products } from '../product-data';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
 prodact = Products;
  id:any;
  name: any;
  private sub: any;
  myProduct:any;

  constructor(
    private Activatedroute: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit() {  
    let id = this.Activatedroute.snapshot.paramMap.get('id');  
    this.id = id;  

   
  }
  exit(){
  this.router.navigate([
    'Product'
  ])
}
}



