import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { Users } from '../model/users';
import { UserService } from '../services/user.service';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
  emailid:string="";
  pass:string="";
  users:any="";
  message:any="";
  usermodel: Users=new Users();
  constructor(private user:UserService , private route:Router){ }
loginForm !: FormGroup;
ngOnInit(){
this.loginForm = new FormGroup({
  emailid : new FormControl('',[Validators.required]),
  pass : new FormControl('',[Validators.required])
})
}

changetype:boolean=true;
isChecked="";
toggle(evt:any){
  this.isChecked=evt.target.checked;
  this.changetype =! this.changetype;
}

submit(data:any){

this.usermodel.email=data.emailid;
this.usermodel.password=data.pass;
this.user.checkUser(this.usermodel).subscribe((result)=>{
  if(result.data == true){
    console.log(result.data);
    this.route.navigateByUrl("homepage")
  }
  else{
    let warning = result.message
    this.message = warning
    
  }
})


// this.user.getUsers()
// .subscribe(result => {

//   console.log(result.response);

//   const detail = result.response.find((a:any) => {
//     return a.email === this.emailid && a.password === this.pass
//   });
//   if(detail){
//     alert("Success !");
//   }else{
//     alert("Failed !");
//   }
// }
// // ,err=>{
// //   alert("Something Went Wrong !")
// // }
//  )
// }
}
}
