import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OffresEmploiComponentComponent } from './offres-emploi-component.component';

describe('OffresEmploiComponentComponent', () => {
  let component: OffresEmploiComponentComponent;
  let fixture: ComponentFixture<OffresEmploiComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OffresEmploiComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OffresEmploiComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
