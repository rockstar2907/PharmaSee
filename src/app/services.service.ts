import { Injectable } from '@angular/core';
import { IEmployee } from './interfaces/employee';
import { IProduct } from './interfaces/product';
import { IUser } from './interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {
  products:IProduct[];
  employees:IEmployee[];
  users:IUser[]=[
    {userName:"admin1",password:"abcd"},
    {userName:"admin2",password:"1234"}
  ]
  constructor() { }

  getProducts():IProduct[]{
    this.products=[
      {productId:'P100',productName:"paracetamol",price:100,expiryDate:new Date("2030-12-20")},
      {productId:'P101',productName:"crocin",price:100,expiryDate:new Date("2030-11-25")},
      {productId:'P102',productName:"aspirin",price:100,expiryDate:new Date("2030-01-22")},
      {productId:'P103',productName:"insulin",price:100,expiryDate:new Date("2030-09-27")}
    ];
    return this.products;
  }

  deleteProduct(productId:string):void{
    this.products.forEach((value,index)=>{
      if(value.productId==productId) this.products.splice(index,1);
  });
  }

  addProduct(prod:IProduct):void{
    this.products.push(prod);
  }

  getEmployees(){
    this.employees=[
      {empId:"E100",empName:"Jack",DOB:new Date("1995-10-02"),phone:9876543211},
      {empId:"E101",empName:"Che",DOB:new Date("1995-10-02"),phone:9876543211},
      {empId:"E102",empName:"Johnny",DOB:new Date("1995-10-02"),phone:9876543211},
      {empId:"E103",empName:"Daniel",DOB:new Date("1995-10-02"),phone:9876543211},
      {empId:"E104",empName:"Someone",DOB:new Date("1995-10-02"),phone:9876543211},
    ];
    return this.employees;
  }

  deleteEmplopyee(Id:string):void{
    this.employees.forEach((value,index)=>{
      if(value.empId==Id) this.employees.splice(index,1);
  });
  }

  addEmployee(emp:IEmployee):void{
    this.employees.push(emp);
  }

  validateUser(userName:string,password:string):boolean{
    var user=this.users.filter(user=>user.userName==userName)[0];
    if(user==null){
      return false;
    }
    else{
      if(user.password==password){
        return true;
      }
      else{
        return false;
      }
    }
  }
}
