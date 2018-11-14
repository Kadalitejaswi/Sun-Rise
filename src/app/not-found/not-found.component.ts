import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.css']
})
export class NotFoundComponent implements OnInit {
  techs = ["HTML","CSS","JavaSscript","Mongodb","NodeJs"];
  // techs = [];
  // viewMode:string="Map";
  viewMode:string="";


  constructor() { }

  ngOnInit() {
  }
changeMode(mode:string):void{
  this.viewMode=mode;
}
}
