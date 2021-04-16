import { Component, OnInit } from '@angular/core';
import { IProduct } from '../interfaces/product';
import { ServicesService } from '../services.service';

@Component({
  selector: 'app-view-products',
  templateUrl: './view-products.component.html',
  styleUrls: ['./view-products.component.css']
})
export class ViewProductsComponent implements OnInit {

  products:IProduct[];
  filteredProducts:IProduct[];
  prod:IProduct;
  showMsg:boolean=true;

  constructor(private _service:ServicesService) { }

  ngOnInit(): void {
    this.products=this._service.getProducts();
    this.filteredProducts=this.products;
    if(this.products.length>0){
      this.showMsg=false;
    }
  }

  searchProduct(productName:string):void{
    this.filteredProducts=this.products;
    this.filteredProducts = this.filteredProducts.filter(prod => prod.productName.toLowerCase().indexOf(productName.toLowerCase()) >= 0);  
  }

  deleteProduct(productId:string):void{
    this._service.deleteProduct(productId);
    if(this.products.length==0){
      this.showMsg=true;
    }
  }

  addProduct(id:string,name:string,price:string,exp:string):void{
    
    if(id.length<1 || id==null){
      alert("Id is invalid");
      return
    }
    if(name.length<1 || name==null){
      alert("Name is invalid");
      return
    }
    if(price.length<1 || price==null){
      alert("Price is invalid");
      return
    }
    if(exp.length<1 || exp==null){
      alert("Expiry Date is invalid");
      return
    }
    if(this.products.filter(prod=>prod.productId==id).length>0){
      alert("ProductId "+id+" already exists!!");
      return;
    }
    this.prod={productId:id,productName:name,price:Number(price),expiryDate:new Date(exp)};
    this._service.addProduct(this.prod);
  }
}
