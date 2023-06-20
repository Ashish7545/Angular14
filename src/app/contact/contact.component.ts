import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  template: `
    <h3>
      contact works!
    </h3>
    <a routerLink="add">Add Contact</a><br>
    <a routerLink="edit/1">Edit Contact</a>

    <div>
      <router-outlet></router-outlet>
    </div>
  `,
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
