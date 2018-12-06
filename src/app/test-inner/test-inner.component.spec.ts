import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestInnerComponent } from './test-inner.component';

describe('TestInnerComponent', () => {
  let component: TestInnerComponent;
  let fixture: ComponentFixture<TestInnerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestInnerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestInnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
