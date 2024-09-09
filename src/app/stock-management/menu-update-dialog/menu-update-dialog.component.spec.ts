import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuUpdateDialogComponent } from './menu-update-dialog.component';

describe('MenuUpdateDialogComponent', () => {
  let component: MenuUpdateDialogComponent;
  let fixture: ComponentFixture<MenuUpdateDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuUpdateDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuUpdateDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
