import { Component, OnInit } from '@angular/core';
import { Username } from '../../model/users';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit{
name:any=""
namemodel : Username = new Username();

  constructor(private home:UserService){
  }

  ngOnInit(){
    let data = sessionStorage.getItem("first")
    this.name = data

  
  }



}
