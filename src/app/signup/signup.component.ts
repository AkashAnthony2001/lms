import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Register } from '../model/users';
import { UserService } from '../user.service';

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
      firstname : new FormControl('',[Validators.required]),
      lastname : new FormControl('',[Validators.required]),
      email : new FormControl('',[Validators.required]),
      password : new FormControl('',[Validators.required]),
      confirmpassword : new FormControl('',[Validators.required]),
      phone : new FormControl('',[Validators.required]),
      terms : new FormControl('',[Validators.required])
    })
  }
  submit(data:any){
    this.user.registerUsers(data).subscribe((res)=>{
      if(res.data == true){
        this.route.navigateByUrl("login")
      }
      
    })
    
  }
}
