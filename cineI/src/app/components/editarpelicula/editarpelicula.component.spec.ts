import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarpeliculaComponent } from './editarpelicula.component';

describe('EditarpeliculaComponent', () => {
  let component: EditarpeliculaComponent;
  let fixture: ComponentFixture<EditarpeliculaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EditarpeliculaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditarpeliculaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
