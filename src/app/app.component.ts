import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  template: `
  <nav class="navbar navbar-default">
   <div style="font-size:30px;font-weight:bold;text-align:center;margin-top:12px;">The Web School</div>
  </nav>
  <router-outlet></router-outlet>
  `,
  styles:[`
  h4{
    font-family:"Times New Roman", Times, serif;
    font-size:1.2em;
    font-weight:bold;
  }
  `]

})
export class AppComponent {
 
}
