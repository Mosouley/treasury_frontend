import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidenavScrollableItemComponent } from './sidenav-scrollable-item.component';

describe('SidenavScrollableItemComponent', () => {
  let component: SidenavScrollableItemComponent;
  let fixture: ComponentFixture<SidenavScrollableItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SidenavScrollableItemComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SidenavScrollableItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
