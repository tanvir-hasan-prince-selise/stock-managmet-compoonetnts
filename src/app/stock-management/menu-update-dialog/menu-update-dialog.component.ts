import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';


@Component({
  selector: 'app-menu-update-dialog',
  templateUrl: './menu-update-dialog.component.html',
  styleUrls: ['./menu-update-dialog.component.scss']
})
export class MenuUpdateDialogComponent  {
changeQuantity = 0;
  updatedQuantity: number = 0; // Default value is now 0
  lowestLimit: number = 10;
  limitType: string = 'Daily';

  constructor(
    public dialogRef: MatDialogRef<MenuUpdateDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public menuItem: any
  ) {
     this.updatedQuantity = menuItem.quantity || 0;
    this.lowestLimit = 10;  // Default value for alert
    this.limitType = 'Daily';  // Default value for limit type
  }

  decreaseQuantity() {
    if (this.changeQuantity > 0) {
      this.changeQuantity--;
    }
  }

  increaseQuantity() {
    this.changeQuantity++;
  }

  updateStock() {
    // Perform stock update logic here
    console.log('Updated stock:', this.changeQuantity);
    this.dialogRef.close();
  }
    closeDialog() {
    this.dialogRef.close();
  }

}
