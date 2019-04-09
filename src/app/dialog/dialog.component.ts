import { Component, OnInit,Inject } from '@angular/core';
import { Data } from '@angular/router';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {
  dt:any;
  data:any=[];

  constructor() { }
  Submitclick(frm){
    // this.dt.nm = frm.value.nm;
    // this.dt.place = frm.value.place;
    // this.dt.qualification = frm.value.qualification;
    this.dt=frm.value
    console.log(this.dt);
    
     this.data.push(this.dt);
     console.log(this.data)
    
    // location.reload();

    }
  ngOnInit() {
    
  }

}


