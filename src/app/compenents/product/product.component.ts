import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/Product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  public listProduct : Product[] = [];
  private urlWebService : string ='';

  constructor(private productService : ProductService) { }

  ngOnInit(): void {
    this.getProduct();   
  }

  public getProduct(){
    this.urlWebService ='Product/products';
    this.productService.getProduct(this.urlWebService).subscribe(
      data => {
          this.listProduct = data;
          console.log(this.listProduct);
          return this.listProduct;         
        } ,
        error  => {
          console.log(error);
        } 
      
    );
  }

}
