import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowallmoviesComponent } from './showallmovies.component';

describe('ShowallmoviesComponent', () => {
  let component: ShowallmoviesComponent;
  let fixture: ComponentFixture<ShowallmoviesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowallmoviesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowallmoviesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
