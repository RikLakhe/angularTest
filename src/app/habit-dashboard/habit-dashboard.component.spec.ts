import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HabitDashboardComponent } from './habit-dashboard.component';

describe('HabitDashboardComponent', () => {
  let component: HabitDashboardComponent;
  let fixture: ComponentFixture<HabitDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HabitDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HabitDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
