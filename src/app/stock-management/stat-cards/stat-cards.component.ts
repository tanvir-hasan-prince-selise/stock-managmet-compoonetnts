import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-stat-cards',
  templateUrl: './stat-cards.component.html',
  styleUrls: ['./stat-cards.component.scss']
})
export class StatCardsComponent {
  @Input() activeCategories!: number;
  @Input() totalCategories!: number;
  @Input() activeMenuItems!: number;
  @Input() totalMenuItems!: number;
  @Input() activeModifiers!: number;
  @Input() totalModifiers!: number;
}
