import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMoviComponent } from './add-movie.component';

describe('AddMovieComponent', () => {
  let component: AddMoviComponent;
  let fixture: ComponentFixture<AddMoviComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddMoviComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddMoviComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
