import { Component } from '@angular/core';

@Component({
  selector: 'app-side-nav',
  template: `<aside [class.fullSize]="resize">
              <div *ngIf="!resize; else fullContent" class="icons">
                <mat-icon (click)="resize = !resize">view_headline</mat-icon>
                <mat-icon>assignment</mat-icon>
                <mat-icon>assignment_ind</mat-icon>
                <mat-icon> business</mat-icon>
                <mat-icon>school</mat-icon>
                <mat-icon>storage</mat-icon>
              </div>
              <ng-template #fullContent>
                <p>Full Content</p>
                <mat-icon
                  style="cursor: pointer; margin-left: 10px;"
                  (click)="resize = !resize">close
                </mat-icon>
              </ng-template>
            </aside>`,
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent {
  public resize = false;
}
