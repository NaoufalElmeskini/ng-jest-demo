import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimalContestComponent } from './animal-contest.component';

describe('AnimalContestComponent', () => {
  let component: AnimalContestComponent;
  let fixture: ComponentFixture<AnimalContestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnimalContestComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnimalContestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
