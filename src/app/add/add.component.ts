import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';



@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  dt:any;
  data:any=[];
  public checkboxValue: boolean;
  // public data = [{ "name": "rakesh", "place": "karimnagar", "qualification": "b.tech" },
  // { "name": "rakesh", "place": "karimnagar", "qualification": "b.tech" },
  // { "name": "rakesh", "place": "karimnagar", "qualification": "b.tech" }]
  constructor(private router: Router) { 

  }
  
  onclick(){
      for (let d of this.data) {
        if(this.checkboxValue==true){

            this.data.splice(this.data.indexOf(d), 1);
            break;
        }
    }
    }
  
  onCheck(){
    if(this.checkboxValue==true){
alert("checked")

   }
  }

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
