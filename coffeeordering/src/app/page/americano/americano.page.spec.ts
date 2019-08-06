import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AmericanoPage } from './americano.page';

describe('AmericanoPage', () => {
  let component: AmericanoPage;
  let fixture: ComponentFixture<AmericanoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AmericanoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AmericanoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
