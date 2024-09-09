import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryListComponent } from './category-list/category-list.component';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatCardModule } from '@angular/material/card';
import { MatTabsModule } from '@angular/material/tabs';
import { StatCardsComponent } from './stat-cards/stat-cards.component';
import { CategoryTableComponent } from './category-table/category-table.component';
import { MenuUpdateDialogComponent } from './menu-update-dialog/menu-update-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
 StatCardsComponent,
    CategoryTableComponent,
    CategoryListComponent,
    MenuUpdateDialogComponent
  ],
  imports: [
    CommonModule,
       MatDialogModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    MatSelectModule,
    MatTableModule,
    MatIconModule,
    MatSlideToggleModule,
    MatCardModule,
    MatTabsModule,
    FormsModule
  ],
  exports: [
    CategoryListComponent, 

  ]
})
export class StockManagementModule {}
