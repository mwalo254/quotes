import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuotesDetaiComponent } from './quotes-detai.component';

describe('QuotesDetaiComponent', () => {
  let component: QuotesDetaiComponent;
  let fixture: ComponentFixture<QuotesDetaiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuotesDetaiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuotesDetaiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
