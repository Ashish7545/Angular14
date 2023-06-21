import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }
  headername="Angular 14 Tutorial";
  salary=1000;
  percent = 0.45;

  isdisabled = true;

  colorname="green";
  font="30px";

  classname="headclass";

  stylevalue={"color" : "green", "font-size" : "30px"}

  colors=['green', 'red', 'yellow', 'black']

  ngOnInit(): void {
  }
  Functionclick(name:string) {
    alert(name);
  }

}
