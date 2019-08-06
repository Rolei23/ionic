import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MacchiatoPage } from './macchiato.page';

describe('MacchiatoPage', () => {
  let component: MacchiatoPage;
  let fixture: ComponentFixture<MacchiatoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MacchiatoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MacchiatoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
