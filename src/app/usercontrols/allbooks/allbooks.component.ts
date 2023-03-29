import { Component } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-allbooks',
  templateUrl: './allbooks.component.html',
  styleUrls: ['./allbooks.component.css']
})
export class AllbooksComponent {
  listbooks:any[]=[]
  constructor(private books:UserService){
    this.books.showall().subscribe((data:any)=>{
      this.listbooks = data.response;
      
    })
    }
       
 
  }
 
