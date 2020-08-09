import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SystemCampingComponent } from './system-camping.component';

describe('SystemCampingComponent', () => {
  let component: SystemCampingComponent;
  let fixture: ComponentFixture<SystemCampingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SystemCampingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SystemCampingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
