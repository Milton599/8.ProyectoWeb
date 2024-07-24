import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatepeliculaComponent } from './createpelicula.component';

describe('CreatepeliculaComponent', () => {
  let component: CreatepeliculaComponent;
  let fixture: ComponentFixture<CreatepeliculaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CreatepeliculaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreatepeliculaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
