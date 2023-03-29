import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Books } from '../../model/users';
import { UserService } from 'src/app/services/user.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-addbooks',
  templateUrl: './addbooks.component.html',
  styleUrls: ['./addbooks.component.css']
})
export class AddbooksComponent implements OnInit{
image : File 
 booksmodel : Books = new Books();

  constructor(private books:UserService , private http:HttpClient){}
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
  upload(event:any){
    this.image = <File>event.target.files[0]; 
  
  }
  Add(data:any){
    const fd = new FormData();
    fd.append('image', this.image , this.image.name)
    fetch('http://localhost:4200/assets/books',{
      method: 'POST',
      body: fd
    })
    .then(response => {
      console.log(response);
    })
    .catch(error => {
      console.error(error);
      
    })

    this.booksmodel.bookname = data.bookname;
    this.booksmodel.pages = data.pages;
    this.booksmodel.author = data.author;
    this.booksmodel.image = data.image;

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
