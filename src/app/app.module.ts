import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatCardModule } from '@angular/material/card';
import { MatTabsModule } from '@angular/material/tabs';
import { CategoryListComponent } from './stock-management/category-list/category-list.component';
import { StockManagementModule } from './stock-management/stock-management.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
        MatTableModule,
    MatIconModule,
    MatSlideToggleModule,
    MatCardModule,
    MatTabsModule,
    StockManagementModule,
FormsModule, 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
