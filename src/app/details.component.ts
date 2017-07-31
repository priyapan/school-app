import { Component, OnInit,AfterViewInit  } from '@angular/core';
import {Router,ActivatedRoute, Params} from '@angular/router';


@Component({
 template :`
 <div id="detailsDiv">

<ul  class="nav nav-tabs" style="border-bottom: 1px solid blue;font-weight:bold;">
    <li id="link1" class="active" data-toggle="tab"  data-target="#assignTab"><a [routerLink]="['assign-details',id]">Assignment</a></li>
    <li data-toggle="tab"  data-target="#submitTab"><a  (click)="goToSubmission()" [routerLink]="['submission-details',id]">Submission</a></li>
</ul>
        <div class='tab-content'>
            <div id='assignTab'  class='tab-pane'>  </div>
            <div id='submitTab' class='tab-pane'>  </div>
        </div>
 </div>
 <div style="">
    <router-outlet></router-outlet> 
</div>

 `
 ,
  styles: [`
    #detailsDiv > .nav-tabs>li>a:hover {
        border-color:blue blue blue;
    }

    #detailsDiv > .nav-tabs>li.active>a,  #detailsDiv  >.nav-tabs>li.active>a:focus, #detailsDiv >  .nav-tabs>li.active>a:hover{
        border: 1px solid blue;
        border-bottom-color: transparent;
    }

  `]
})

export class DetailsComponent implements OnInit{
    id:any;
 constructor(private router :Router,private route: ActivatedRoute){}
        ngOnInit(){
                this.route.params.subscribe((params: Params) => {
                this.id = params['id'];
                console.log("this is from details "+this.id);
            //this.router.navigate(['assign-details',this.id]);
                let nurl ="assign-list/details/"+ this.id+ "/assign-details";
                this.router.navigate([nurl,this.id]);
                document.getElementById("link1").click();
                    });
        };
     
               
        // goToAssignDetails () {
        //     this.router.navigate(['assign-list/details/Q/assign-details',this.id]);
        // }

        goToSubmission (){
            let surl="assign-list/details/"+ this.id+ "/submission-details";
            this.router.navigate([surl,this.id]);
            console.log("id is "+this.id)
        }
   
}