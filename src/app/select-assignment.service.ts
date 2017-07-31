import {Injectable} from '@angular/core';



@Injectable()
export class SelectAssignmentService{
    title:string;
    description:string;
    due_dt:string;
    object:any;


    setAssignment(assignObject:any){
        this.object= assignObject;
    //    this.title = this.object.title;
    //    this.description= this.object.description;
    //    this.due_dt= this.object.due_dt; 

    }
        getAssignment(){
            return  this.object;
        }
   

}