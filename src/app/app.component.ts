import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<app-header></app-header>
              <div class="container">
                <app-side-nav></app-side-nav>
                <app-table></app-table>
              </div>`,
  styleUrls: ['./app.component.scss']
})
export class AppComponent {}
