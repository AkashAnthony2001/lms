import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Register } from '../model/users';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit{
  constructor(private user:UserService , private route:Router){}

  
  
  registermodel: Register=new Register();
  message:any;

  signupForm !: FormGroup;
  ngOnInit(){
    this.signupForm = new FormGroup({
      'firstname' : new FormControl('',[Validators.required]),
      'lastname' : new FormControl('',[Validators.required]),
      'email' : new FormControl('',[Validators.required]),
      'password' : new FormControl('',[Validators.required,Validators.minLength(10)]),
      'confirmpassword' : new FormControl('',[Validators.required,Validators.minLength(10)]),
      'phone' : new FormControl('',[Validators.required]),
      'terms' : new FormControl('',[Validators.required])
    });
  }
  submit(datas:any){
    this.user.registerUsers(datas).subscribe((res)=>{
      if(res.data == true){
        this.route.navigateByUrl("login")
      }
     // var first = JSON.parse(datas.firstname)
      sessionStorage.setItem("first" , datas.firstname)
    })
   
  }
}
