import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Quizz2Page } from './quizz2.page';

describe('Quizz2Page', () => {
  let component: Quizz2Page;
  let fixture: ComponentFixture<Quizz2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Quizz2Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Quizz2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
