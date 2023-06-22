import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/Service/user.service';
import * as alertifyjs from 'alertifyjs';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private route:Router, private service:UserService) { }

  ngOnInit(): void {
  }
  respdata:any;

  RedirectLogin() {
    this.route.navigate(['login']);
  }
  reactiveform = new FormGroup({
    username: new FormControl('', Validators.required),
    email: new FormControl('', Validators.compose([Validators.email, Validators.required])),
    password: new FormControl('', Validators.required),
    aadharId: new FormControl('', Validators.compose([Validators.required, Validators.maxLength(12), Validators.minLength(12)])),
    city: new FormControl('', Validators.required),
    state: new FormControl('', Validators.required),
    pinCode: new FormControl('', Validators.compose([Validators.minLength(6), Validators.maxLength(6), Validators.required])),
  });

  SaveUser() {
    if(this.reactiveform.valid) {
      this.service.Registration(this.reactiveform.value).subscribe(item=> {
        this.respdata = item;
        if(this.respdata.status=='Success') {
          alertifyjs.success("Registration Successful.");
          this.RedirectLogin();
        }
        else {

          alertifyjs.error('Something Went Wrong Please Try Again.');
        }
      })
    }
  }

}
