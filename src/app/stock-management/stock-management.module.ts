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

@NgModule({
  declarations: [
 StatCardsComponent,
    CategoryTableComponent,
    CategoryListComponent
  ],
  imports: [
    CommonModule,
    MatTableModule,
    MatIconModule,
    MatSlideToggleModule,
    MatCardModule,
    MatTabsModule
  ],
  exports: [
    CategoryListComponent, 

  ]
})
export class StockManagementModule {}
