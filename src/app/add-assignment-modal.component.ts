import { Component,OnInit } from '@angular/core';
import { DialogRef, ModalComponent, CloseGuard } from 'angular2-modal';
import { BSModalContext } from 'angular2-modal/plugins/bootstrap';

export class AddAssignmentModalContext extends BSModalContext{
public num1: number;
  public num2: number;

}
 
@Component({
 selector : 'add-modal',
 template: `
<div class="panel panel-primary">
    <div class="panel-heading">New Assignment</div>
    <div class="panel-body">
        <div><label>Title:</label><input type="text" class="form-control" [(ngModel)]="newAssign.title"></div>
        <div><label>Due on:</label><input type="date" class="form-control" [(ngModel)]="newAssign.due_at"></div>  
        <div><label>Details:</label><input type="text" class="form-control" [(ngModel)]="newAssign.description"></div>
    </div>
    <div [ngClass]="{'alert alert-danger':errorMessage}">{{errorMessage}}</div>
    <div class="panel-footer">
        <button class="btn btn-info" (click)="assignSubmit()">Submit</button>
        <button class="btn btn-danger" (click)="closeModal()">Cancel</button>
    </div>

</div>

 `


})


export class AddAssignmentModal implements CloseGuard, ModalComponent<AddAssignmentModalContext> {
  context: AddAssignmentModalContext;
  public wrongAnswer: boolean;
  newAssign:any={};
  errorMessage:string;

  constructor(public dialog: DialogRef<AddAssignmentModalContext>) {
    this.context = dialog.context;
    this.wrongAnswer = true;
    //dialog.setCloseGuard(this);
  }

  closeModal() {
   // this.wrongAnswer = value != 5;
    this.dialog.close();
  }


  beforeDismiss(): boolean {
    return true;
  }

  beforeClose(): boolean {
    return this.wrongAnswer;
  }
 
  assignSubmit(){
      this.newAssign.id = (Math.random()*1000).toFixed();
      if(this.newAssign.due_at && this.newAssign.title && this.newAssign.description){
            this.dialog.close(this.newAssign);
      }
        else {
            this.errorMessage="Fill all the fields to submit an assignment";
            //this.dialog.close();}
  }


}
}