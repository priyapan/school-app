import { BrowserModule } from '@angular/platform-browser';
import { NgModule ,  CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {AssignmentListComponent} from './assignment-list.component';
import {AssignmentDetailsComponent} from './assignment-details.component';
import {SubmissionComponent} from './submission.component';
import {DetailsComponent} from './details.component';
import {DefaultComponent} from './default-details.component';
import {DataFetchService} from './data-fetch.service';
import {SelectAssignmentService} from './select-assignment.service';
import {RouterModule} from '@angular/router';
import {Routes} from '@angular/router';
import { HashLocationStrategy, LocationStrategy } from "@angular/common";
import { ModalModule } from 'angular2-modal';
import { BootstrapModalModule } from 'angular2-modal/plugins/bootstrap';
import { Modal, BSModalContext } from 'angular2-modal/plugins/bootstrap';
import {AddAssignmentModal} from './add-assignment-modal.component';

@NgModule({
  declarations: [
    AppComponent ,DefaultComponent, AssignmentListComponent,DetailsComponent,AddAssignmentModal,AssignmentDetailsComponent,SubmissionComponent
  ],
  imports: [ 
    FormsModule,
    BrowserModule,
    HttpClientModule,
    ModalModule.forRoot(),
    BootstrapModalModule,
    RouterModule.forRoot([
      {
        path :"assign-list",
        component: AssignmentListComponent,
        children:[
           {path:"", redirectTo: 'default-details', pathMatch: 'full'},
           {path:"default-details",component:DefaultComponent},
           {path:"details/:id",component:DetailsComponent,
               children:[
                {path :'assign-details/:id', component:AssignmentDetailsComponent},
                {path :'submission-details/:id', component:SubmissionComponent}                
                ]
      }
              //,{path :'assign-details/:id', component:AssignmentDetailsComponent}
      ]
      },
      {
      path: '',
      redirectTo: 'assign-list',
      pathMatch: 'full'
    }

    ])
  ],
  providers: [DataFetchService,SelectAssignmentService,Modal,
          {provide: LocationStrategy, useClass: HashLocationStrategy}
        ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  bootstrap: [AppComponent],
  entryComponents: [ AddAssignmentModal ]
})
export class AppModule { }
