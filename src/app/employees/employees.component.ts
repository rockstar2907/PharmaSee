import { Component, OnInit } from '@angular/core';
import { IEmployee } from '../interfaces/employee';
import { ServicesService } from '../services.service';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {

  employees:IEmployee[];
  filteredemployees:IEmployee[];
  emp:IEmployee;
  showMsg:boolean=true;
  constructor(private _service:ServicesService) { }

  ngOnInit(): void {
    var auth=sessionStorage.getItem("auth");
    this.employees= this._service.getEmployees();
    this.filteredemployees=this.employees;
    if(this.filteredemployees.length>0){
      this.showMsg=false;
    }
  }

  searchEmployee(emp:string):void{
    this.filteredemployees=this.employees;
    this.filteredemployees = this.filteredemployees.filter(prod => prod.empName.toLowerCase().indexOf(emp.toLowerCase()) >= 0);
  }

  addEmployee(id:string,name:string,dob:string,phn:string):void{
    if(id.length<1 || id==null){
      alert("Id is invalid");
      return
    }
    if(name.length<1 || name==null){
      alert("Name is invalid");
      return
    }
    if(dob.length<1 || dob==null){
      alert("DOB is invalid");
      return
    }
    if(phn.length<1 || [phn]==null){
      alert("Phone number is invalid");
      return
    }
    if(this.employees.filter(prod=>prod.empId==id).length>0){
      alert("EmplopyeeId "+id+" already exists!!");
      return;
    }
    this.emp={empId:id,empName:name,phone:Number(phn),DOB:new Date(dob)};
    this._service.addEmployee(this.emp);
  }

  deleteEmployee(id:string):void{
    this._service.deleteEmplopyee(id);
    if(this.filteredemployees.length<1){
      this.showMsg=true;
    }
  }
}
