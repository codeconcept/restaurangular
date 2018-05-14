
import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { DishTableComponent } from './dish-table.component';

describe('DishTableComponent', () => {
  let component: DishTableComponent;
  let fixture: ComponentFixture<DishTableComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DishTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DishTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
