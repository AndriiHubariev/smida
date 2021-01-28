import { Component } from '@angular/core';

@Component({
  selector: 'app-side-nav',
  template: `<aside>
              <div class="icons">
                <mat-icon>view_headline</mat-icon>
                <mat-icon>assignment</mat-icon>
                <mat-icon>assignment_ind</mat-icon>
                <mat-icon> business</mat-icon>
                <mat-icon>school</mat-icon>
                <mat-icon>storage</mat-icon>
              </div>
            </aside>`,
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent {
}
