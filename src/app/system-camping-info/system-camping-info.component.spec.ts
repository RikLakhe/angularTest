import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SystemCampingInfoComponent } from './system-camping-info.component';

describe('SystemCampingInfoComponent', () => {
  let component: SystemCampingInfoComponent;
  let fixture: ComponentFixture<SystemCampingInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SystemCampingInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SystemCampingInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
