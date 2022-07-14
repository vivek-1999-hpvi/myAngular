import { Component, OnInit } from '@angular/core';
import { EmpService } from '../emp.service';
import { employee } from '../models/employee';

@Component({
  selector: 'app-emplist',
  templateUrl: './emplist.component.html',
  styleUrls: ['./emplist.component.css']
})
export class EmplistComponent implements OnInit {

  emplist:employee[];

  constructor(private service:EmpService)    { }

  ngOnInit(): void {
    this.emplist=this.service.GetAllEmployees();
  }

}



