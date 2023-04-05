import { Component } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Products } from '../product-data';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  AllProducts = Products
  constructor(
   private route: ActivatedRoute,
   private router: Router  ) {
    
     route.paramMap.subscribe((el:any)=>{
       console.log(el.params)
     });
     

     } 

}
