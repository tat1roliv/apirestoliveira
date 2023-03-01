import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentsTempComponent } from './students-temp.component';

describe('StudentsTempComponent', () => {
  let component: StudentsTempComponent;
  let fixture: ComponentFixture<StudentsTempComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentsTempComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentsTempComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
