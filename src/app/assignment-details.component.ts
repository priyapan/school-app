import { Component, OnInit } from '@angular/core';
import {SelectAssignmentService} from './select-assignment.service';
import {Router} from '@angular/router';



@Component({
 selector : 'assign-details',
 template :`

 <div *ngIf='assignment' style="padding:5px;border:solid blue 1px;border-top-color: transparent;min-height: 144px;">
    <div class="row">
        <div class="col-lg-10 col-md-10 col-sm-9"> <h2>{{assignment.title}}</h2> </div>
        <div class="col-lg-2 col-md-2 col-sm-3" style="margin-top:4%;">
        {{assignment.due_at | date: longDate}}</div>
    </div>
 <p>{{assignment.description}}</p>
  </div>
  <h2 *ngIf="!assignment">Select Assignment to proceed</h2>
 
 `
})

export class AssignmentDetailsComponent implements OnInit{

   assignment :any; 
    constructor(private selectedAssignmentService: SelectAssignmentService, private router :Router){

     }

 ngOnInit(){
    this.assignment = this.selectedAssignmentService.getAssignment();
    console.log("called assign-details"+ this.assignment);
    if(!this.assignment){
        this.router.navigate(['']);
    }
 }
}