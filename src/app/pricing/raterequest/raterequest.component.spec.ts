import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RaterequestComponent } from './raterequest.component';

describe('RaterequestComponent', () => {
  let component: RaterequestComponent;
  let fixture: ComponentFixture<RaterequestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RaterequestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RaterequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
