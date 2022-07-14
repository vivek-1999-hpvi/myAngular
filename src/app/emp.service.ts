import { Injectable } from '@angular/core';
import { employee } from './models/employee';

@Injectable({
  providedIn: 'root'
})
export class EmpService {

  constructor() { }

  employees: employee[] = [
    {id :1, first_name:"Bill",last_name: "Clinton",salary :50000, doj:new Date(2022,6,7),},
    {id :2, first_name:"Vivek",last_name: "Singh",salary :60000, doj:new Date(2021,7,7),},
    {id :3, first_name:"Tarun",last_name: "Kumar",salary :70000, doj:new Date(2020,8,7),},
  ];
  
   GetAllEmployees(): employee[] {
 
    return this.employees;
  }
 
}
