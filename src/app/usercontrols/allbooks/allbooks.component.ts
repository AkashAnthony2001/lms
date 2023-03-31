import { Component } from '@angular/core';
import { Books } from 'src/app/model/users';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-allbooks',
  templateUrl: './allbooks.component.html',
  styleUrls: ['./allbooks.component.css']
})
export class AllbooksComponent {
  listbooks:any[]=[]

  ngOnInit(){
    this.refreshBooks();
  }
  constructor(private books:UserService){
    this.books.showall().subscribe((data:any)=>{
      this.listbooks = data.response;
      
    })
    }
    remove(id : string){
      this.books.removedata(id).subscribe();
    }
       
    refreshBooks(){
      this.books.showall().subscribe((res)=>{
        this.books.book=res as Books[];
      })
    }
  }
 
