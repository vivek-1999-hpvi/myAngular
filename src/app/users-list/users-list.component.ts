import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  users = [
    {
      id: 3112,
      name: 'Carmine Gallo',
      age: 21,
      email: 'carmine@gmail.com',
    },
    {
      id: 31756,
      name: 'Neil Pasricha',
      age: 22,
      email:'neil@gmail.com',

    },
    {
      id: 314314,
      name: 'John Doe',
      age: 23,
      email: 'john@gmail.com',
    },
  ];

}
