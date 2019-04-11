import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { formArrayNameProvider } from '@angular/forms/src/directives/reactive_directives/form_group_name';
import { UserService } from '../services/user.service';
import { UserData } from '../model/User';



@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  ud: UserData;
  dt: any;
  data: any = [];
  // rak:any=[];
  public checkboxValue: boolean;
  // public data = [{ "name": "rakesh", "place": "karimnagar", "qualification": "b.tech" },
  // { "name": "rakesh", "place": "karimnagar", "qualification": "b.tech" },
  // { "name": "rakesh", "place": "karimnagar", "qualification": "b.tech" }]
  constructor(private router: Router, private us: UserService) {
    this.checkboxValue = false;
    this.ud = new UserData();
  }

  onclick() {
    for (let d of this.data) {
      if (this.checkboxValue == true) {

        this.data.splice(this.data.indexOf(d), 1);
        break;
      }
    }
  }

  onCheck() {
    if (this.checkboxValue == true) {
      alert("checked")

    }
  }

  Submitclick(frm) {
    this.dt = frm.value
    console.log(this.dt);
    this.data.push(this.dt);
    console.log(this.data)
    frm.reset();
  }

  ngOnInit() {

  }
  btnclick(frm: any) {
    if (frm.valid) {
      this.ud.name = frm.value.name;
      this.ud.place = frm.value.place;
      this.ud.qualification = frm.value.qualification;


      this.us.insertData(this.ud).subscribe((data) => {
        console.log(data);

      });
      frm.reset();
      this.router.navigate(['show'])


    }

  }

}
