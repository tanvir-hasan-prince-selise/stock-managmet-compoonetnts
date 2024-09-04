import { Component, Input } from '@angular/core';
import { CategoryElement } from '../category-list/category-list.component';

@Component({
  selector: 'app-category-table',
  templateUrl: './category-table.component.html',
  styleUrls: ['./category-table.component.scss']
})
export class CategoryTableComponent {
  
  @Input() categoryData!: CategoryElement[];
  @Input() dynamicColumns!: { key: string, label: string }[];
  @Input() showToggle: boolean = true;
  @Input() showEdit: boolean = true;

  // Add this for dynamic table title
  @Input() tableTitle: string = '';  // <-- Add this line
  
  displayedColumns!: string[];
  actionColumnsPresent: boolean = false;

  ngOnChanges() {
    // Create the displayedColumns array based on the inputs
    this.displayedColumns = this.dynamicColumns.map(col => col.key);

    this.actionColumnsPresent = this.showToggle && this.showEdit;

    if (this.showToggle) {
      this.displayedColumns.push('toggle');
    }

    if (this.showEdit) {
      this.displayedColumns.push('edit');
    }

    // Warn if no action columns are being displayed
    if (!this.showToggle && !this.showEdit) {
      console.warn('No action columns are shown. The table might not display properly.');
    }
  }

  onToggleChange(element: CategoryElement) {
    // Logic for toggle
  }

  onEdit(element: CategoryElement) {
    // Logic for edit action
  }
}
