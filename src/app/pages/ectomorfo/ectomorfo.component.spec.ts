import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EctomorfoComponent } from './ectomorfo.component';

describe('EctomorfoComponent', () => {
  let component: EctomorfoComponent;
  let fixture: ComponentFixture<EctomorfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EctomorfoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EctomorfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
