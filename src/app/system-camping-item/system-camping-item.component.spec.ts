import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SystemCampingItemComponent } from './system-camping-item.component';

describe('SystemCampingItemComponent', () => {
  let component: SystemCampingItemComponent;
  let fixture: ComponentFixture<SystemCampingItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SystemCampingItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SystemCampingItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
