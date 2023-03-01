import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LessonsEditComponent } from './lessons-edit.component';

describe('LessonsEditComponent', () => {
  let component: LessonsEditComponent;
  let fixture: ComponentFixture<LessonsEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LessonsEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LessonsEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
