import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectAnimalComponent } from './select-animal.component';

describe('SelectNameComponent', () => {
  let component: SelectAnimalComponent;
  let fixture: ComponentFixture<SelectAnimalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectAnimalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelectAnimalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
