import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateDrivenFromComponentComponent } from './template-driven-from-component.component';

describe('TemplateDrivenFromComponentComponent', () => {
  let component: TemplateDrivenFromComponentComponent;
  let fixture: ComponentFixture<TemplateDrivenFromComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TemplateDrivenFromComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplateDrivenFromComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
