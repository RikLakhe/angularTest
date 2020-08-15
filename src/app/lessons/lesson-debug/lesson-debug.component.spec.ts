import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LessonDebugComponent } from './lesson-debug.component';

describe('LessonDebugComponent', () => {
  let component: LessonDebugComponent;
  let fixture: ComponentFixture<LessonDebugComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LessonDebugComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LessonDebugComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
