import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})
export class ShowComponent implements OnInit {

   dt:any=[]
   data:string;
  constructor(private router:Router) { }
  Submitclick(frm){
    this.dt.name = frm.value.name;
    this.dt.place = frm.value.place;
    this.dt.qualification = frm.value.qualification;
    console.log(this.dt);
     this.dt.push(this.dt);
// localStorage.setItem(this.data,JSON.stringify(this.dt))    
//  var data=localStorage.getItem(this.data)
//  console.log(data)
this.router.navigate(['add'])
  }
  ngOnInit() {
  }

}
