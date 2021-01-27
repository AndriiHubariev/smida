import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  template: `<mat-toolbar class="header">
                <div class="header_logo">
                  <img src="../../../assets/pictures/logo-header.png" alt="Logo">
                  <span>SMIDA</span>
                </div>
                <div class="header_info">
                  <span>name</span>
                  <button mat-button>ВИЙТИ</button>
                  <mat-icon>exit_to_app</mat-icon>
                </div>
              </mat-toolbar>`,
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {}
