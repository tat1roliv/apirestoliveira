import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentsEditarComponent } from './students-editar.component';

describe('StudentsEditarComponent', () => {
  let component: StudentsEditarComponent;
  let fixture: ComponentFixture<StudentsEditarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentsEditarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentsEditarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
