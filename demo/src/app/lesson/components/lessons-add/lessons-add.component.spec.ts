import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LessonsAddComponent } from './lessons-add.component';

describe('LessonsAddComponent', () => {
  let component: LessonsAddComponent;
  let fixture: ComponentFixture<LessonsAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LessonsAddComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LessonsAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
