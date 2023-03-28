import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifybooksComponent } from './modifybooks.component';

describe('ModifybooksComponent', () => {
  let component: ModifybooksComponent;
  let fixture: ComponentFixture<ModifybooksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifybooksComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModifybooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
