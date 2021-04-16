import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { ServicesService } from '../services.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private _service:ServicesService,private router:Router) { }

  ngOnInit(): void {
  }

  validate(userName:string,password:string):void{
    var status=this._service.validateUser(userName,password);
    if(status){
      sessionStorage.setItem("username",userName);
      sessionStorage.setItem("auth","true");
      this.router.navigate(['/viewProducts']);
    }
    else{
      alert("invalid creds!!!");
      return;
    }
  }
}
