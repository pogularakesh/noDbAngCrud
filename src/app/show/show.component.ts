import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserData } from '../model/User';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})
export class ShowComponent implements OnInit {
ud:UserData;
rak:any=[];
  constructor(private router:Router,private us:UserService) {
    this.ud=new  UserData()
   }
  
  ngOnInit() {
        this.us.getData().subscribe((data) => {
      console.log(data)
      this.ud = data;
//  this.rak.push(this.ud)
//  console.log(this.rak)

    })
  }

}
