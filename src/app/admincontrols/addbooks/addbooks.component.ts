import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Books } from '../../model/users';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-addbooks',
  templateUrl: './addbooks.component.html',
  styleUrls: ['./addbooks.component.css']
})
export class AddbooksComponent implements OnInit{

 booksmodel : Books = new Books();

  constructor(private books:UserService){}
  message:any
  addbooks !: FormGroup;
  ngOnInit(){
    this.addbooks = new FormGroup({
      'bookname' : new FormControl('',[Validators.required]),
      'pages' : new FormControl('',[Validators.required]),
      'author' : new FormControl('',[Validators.required]),
      'image' : new FormControl('',[Validators.required])
    });
  }
  Add(data:any){
    this.booksmodel.bookname = data.bookname;
    this.booksmodel.pages = data.pages;
    this.booksmodel.author = data.author;
    this.booksmodel.image = "../assets/books/"+data.image+".jpg";

    this.books.savebooks(this.booksmodel).subscribe((result)=>{
      if(result.data == true){
        let warning = "Book Added Successfully !"
        this.message = warning ;
      }
      else{
        console.log("Error");
        
      }
    })
  }
}
