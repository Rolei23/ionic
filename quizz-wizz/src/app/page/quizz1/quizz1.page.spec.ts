import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Quizz1Page } from './quizz1.page';

describe('Quizz1Page', () => {
  let component: Quizz1Page;
  let fixture: ComponentFixture<Quizz1Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Quizz1Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Quizz1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
