import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { ProductsComponent } from './products/products.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { DetailsComponent } from './details/details.component'


const routes: Routes = [
  {
    path:'Home',
    component: HomeComponent
  },
  {
    path:'Product',
    component:ProductsComponent
  },
  {
  path:'product-details/:id',
  component: ProductDetailsComponent
},
{
  path: '', redirectTo: 'Home', pathMatch: 'full'
},
{
  path:'Details/:id',
  component: DetailsComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
