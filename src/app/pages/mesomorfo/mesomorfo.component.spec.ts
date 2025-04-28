import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MesomorfoComponent } from './mesomorfo.component';

describe('MesomorfoComponent', () => {
  let component: MesomorfoComponent;
  let fixture: ComponentFixture<MesomorfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MesomorfoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MesomorfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
