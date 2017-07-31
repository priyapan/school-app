import { Component,OnInit } from '@angular/core';
import {DataFetchService} from  './data-fetch.service';
import {submissionObject} from './submissionObject';
import {ActivatedRoute,Params} from '@angular/router';

@Component({
 selector : 'submit-details',
 template : `
 <div *ngFor= 'let x of data;let i = index' class='' style="padding:5px;border:solid blue 1px;border-top-color: transparent;">
    <div class="row">
      <div class="col-lg-2 col-md-3 col-sm-4">
            <img src={{x.creator.avatars.large}} alt='image'>
      </div>
      
      <div class="col-lg-9 col-md-8 col-sm-7" style="margin-top:40px" >
        <div>{{x.creator.first_name}}</div>
        <div>Turned in {{x.submitted_at|date:longDate}}</div>
      </div>
      <div class="col-lg-1 col-md-1 col-sm-1">
        <div data-toggle="collapse" (click)="toggleVal()" [attr.data-target]="'#content'+i"  
        class="glyphicon" [ngClass]="{'glyphicon-chevron-up':!openPanel,'glyphicon-chevron-down':openPanel}" 
        style="margin-top:50px"></div>
       </div>
    </div>
        <div [attr.id]="'content'+i" class="collapse" style="background-color:#ccc3c3;border:solid black .5px;"> {{x.content}}</div>
    
</div>    
 `
})

export class SubmissionComponent implements OnInit{
//     first_name :string;
// last_name :string;
// avatars:any;
// content:string;
// submitted_at:string;
data:any;
id:String;
url:any;
openPanel:boolean=true;
constructor(private dataFetchService :DataFetchService,private route: ActivatedRoute){}

ngOnInit(){
        this.route.params.subscribe((param:Params)=> this.id=param['id']);
       this.url= "https://api.edmodo.com/assignment_submissions?assignment_id="+ this.id +"&assignment_creator_id=73240721&access_token=12e7eaf1625004b7341b6d681fa3a7c1c551b5300cf7f7f3a02010e99c84695d";

    try{
   this.dataFetchService.getData(this.url).then(Obj => {this.data= Obj});
    } 
catch(e){}
//this.data=submissionObject;
}
toggleVal(){
this.openPanel = !this.openPanel;
}



}