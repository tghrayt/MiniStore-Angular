import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/Product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {


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
          return this.listProduct;         
        } ,
        error  => {
          console.log(error);
        } 
      
    );
  }

  public supprimerProduit(productId :number | undefined){
    this.urlWebService ='Product';
    this.productService.deleteProduct(this.urlWebService,productId).subscribe(
      data => {
          this.ngOnInit();   
          return data;     
         
        } ,
        error  => {
          console.log(error);
        } 
      
    );
  }
}
