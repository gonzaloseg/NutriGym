import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RopaMujerComponent } from './ropa-mujer.component';

describe('RopaMujerComponent', () => {
  let component: RopaMujerComponent;
  let fixture: ComponentFixture<RopaMujerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RopaMujerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RopaMujerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
