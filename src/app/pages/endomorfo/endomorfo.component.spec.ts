import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EndomorfoComponent } from './endomorfo.component';

describe('EndomorfoComponent', () => {
  let component: EndomorfoComponent;
  let fixture: ComponentFixture<EndomorfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EndomorfoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EndomorfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
