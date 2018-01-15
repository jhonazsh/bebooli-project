import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewBookLinkComponent } from './new-book-link.component';

describe('NewBookLinkComponent', () => {
  let component: NewBookLinkComponent;
  let fixture: ComponentFixture<NewBookLinkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewBookLinkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewBookLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
