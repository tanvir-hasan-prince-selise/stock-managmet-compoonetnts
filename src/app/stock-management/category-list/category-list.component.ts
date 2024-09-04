import { Component } from '@angular/core';

export interface CategoryElement {
  [key: string]: any;
}

export interface MenuItemElement {
  [key: string]: any;
}

// Category data
const CATEGORY_DATA: CategoryElement[] = [
  { categoryName: 'Breakfast Dish', menuItems: 3, itemsNames: 'Sandwich, Diet Salad, Egg Sandwich' },
  { categoryName: 'Dinner', menuItems: 7, itemsNames: 'Salades variée, Salade césar, Fondant au chocolat' },
  { categoryName: 'Happy Hour', menuItems: 2, itemsNames: 'Fondant au chocolat, Pizza Margherita' },
  { categoryName: 'Daily Deals', menuItems: 5, itemsNames: 'Pizza Margherita, Fondant au chocolat, Quesadillas chillen' },
  { categoryName: 'Kids Meal', menuItems: 2, itemsNames: 'Burger Classic, Fondant au chocolat' },
  { categoryName: 'Snacks', menuItems: 8, itemsNames: 'Quesadillas chillen, Pizza Margherita' },
  { categoryName: 'Drinks', menuItems: 6, itemsNames: 'Salade césar, Fondant au chocolat'},
];

// Menu Items data
const MENU_ITEMS_DATA: MenuItemElement[] = [
  { menuName: 'Sandwich', quantity: '8 / 100', frequency: 'Daily', lowStock: true },
  { menuName: 'Diet Salad', quantity: '86 / 100', frequency: 'Weekly', lowStock: false },
  { menuName: 'Chicken Burger', quantity: '54 / 80', frequency: 'Daily', lowStock: false },
  { menuName: 'Beef Burger', quantity: '40 / 50', frequency: 'Weekly', lowStock: false },
  { menuName: 'Egg Benedict', quantity: '6 / 100', frequency: 'Daily', lowStock: true },
  { menuName: 'Diet Coke', quantity: '20 / 50', frequency: 'Daily', lowStock: false },
  { menuName: 'Chocolate Milk Shake', quantity: '17 / 70', frequency: 'Daily', lowStock: false },
];

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.scss']
})
export class CategoryListComponent {

  // Dynamic title
  tableTitle = 'Category List';

  // Category data
  dynamicColumnsCategory = [
    { key: 'categoryName', label: 'Category Name' },
    { key: 'menuItems', label: 'Menu Items' },
    { key: 'itemsNames', label: 'Items Names' },
  ];

  categoryData = CATEGORY_DATA;

  // Menu items data
  dynamicColumnsMenuItems = [
    { key: 'menuName', label: 'Menu Name' },
    { key: 'quantity', label: 'Quantity' },
   
  ];

  menuItemsData = MENU_ITEMS_DATA;

  activeCategories = 10;
  totalCategories = 12;
  activeMenuItems = 24;
  totalMenuItems = 30;
  activeModifiers = 13;
  totalModifiers = 20;

  // Method to change the title based on the selected tab
  onTabChange(event: any) {
    const selectedIndex = event.index;
    if (selectedIndex === 0) {
      this.tableTitle = 'Category List';
    } else if (selectedIndex === 1) {
      this.tableTitle = 'Menu List';
    }
  }
}
