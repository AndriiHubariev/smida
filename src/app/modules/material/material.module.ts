import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSelectModule } from '@angular/material/select';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  imports: [
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatSidenavModule,
    MatTableModule,
    MatPaginatorModule,
    MatSelectModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatInputModule,
    MatFormFieldModule,
  ],
  declarations: [],
  exports: [
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatSidenavModule,
    MatTableModule,
    MatPaginatorModule,
    MatSelectModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatInputModule,
    MatFormFieldModule,
  ],
})
export class MaterialModule {}
