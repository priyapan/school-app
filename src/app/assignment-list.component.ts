import { Component,OnInit } from '@angular/core';
import {assignmentObject} from './assignmentObject';
import { DataFetchService } from './data-fetch.service';
import {SelectAssignmentService} from './select-assignment.service';
import {Router} from '@angular/router';
import {AllUrl} from './url';
import { Overlay, overlayConfigFactory } from 'angular2-modal';
import { Modal, BSModalContext } from 'angular2-modal/plugins/bootstrap';
import {AddAssignmentModal} from './add-assignment-modal.component';

@Component({
  selector: 'assign-list',
  template: `
    <div class="container-fluid">
       <div class="row-fluid">
            <div  class="col-lg-3 col-md-3 col-sm-3">
            
             <div class="panel panel-primary">
                <div class="panel-heading" style="font-size:20px; text-align:center;">{{title}}</div>
                    <div *ngFor = "let assignment of assignments" class="panel-body" style="border-top:solid blue 1px;text-align:center;">
                        <div >
                            <a  class="assign_link" (click)= "selectedAssignment(assignment)">{{assignment.title}}</a>
                            <div style="font-size:14px;">due {{assignment.due_at | date:longDate}}</div>
                        </div>
                    </div>
                    <div style="text-align:center;">
                        <button class="btn btn-info add-assign-btn" (click)="addAssignment()">Add Assignment</button>
                    </div>
                    </div>

            </div>
            
            <div class="col-lg-9 col-md-9 col-sm-9" > <router-outlet></router-outlet> 
            </div>
        </div>
    </div>
      `,
   styles:[`
   .assign_link{
cursor:pointer;
font-weight:bold;

   }
   .assign{
           width: 23%;
      margin-right:2%;
      border:1px solid black;
      border-radius:5px;
      background-color:#e3dfdf;
      padding-left:5px;
      
   }
    .add-assign-btn{
        background-color:#098f0e;
        margin-bottom: 2%;
        text-align:center;
    }
   `]
})

export class AssignmentListComponent implements OnInit {
    assignments :any;
    assignUrl = AllUrl.assignmentUrl;
    selected:any;
    title = 'Assignments';
    id:string;
        constructor(private dataFetchService:DataFetchService, public modal: Modal, private router:Router,private selectedAssignmentService: SelectAssignmentService){ }
        ngOnInit(){
            
            try{
               // this.assignments =
                 this.dataFetchService.getData(this.assignUrl)
                 .then(
                     data=> {this.assignments = data}
                 )
                    .catch(
                        response => {console.log("got error"+response.message)}
                    );
            }catch(e){
         //    this.assignments = assignmentObject;
            }   
            
            

        
        }
    
    selectedAssignment(assignment:any){
        // this.selected = assignment;      
        this.selectedAssignmentService.setAssignment(assignment);
        this.id = assignment.id;
       // let aurl = "assign-list/details/" + this.id + "/assign-details"
        this.router.navigate(['assign-list/details/',this.id]);
            }
    addAssignment(){
  this.modal.open(AddAssignmentModal, overlayConfigFactory({ num1: 2, num2: 3 }, BSModalContext))
  .then(dig =>{
      dig.result.then(res=>{
            if(res){
                this.assignments.push(res);
            }
           console.log(this.assignments+"mmmm");
        });
      
    });

    }

}