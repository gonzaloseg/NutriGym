import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PoliticaprivaComponent } from './politicapriva.component';

describe('PoliticaprivaComponent', () => {
  let component: PoliticaprivaComponent;
  let fixture: ComponentFixture<PoliticaprivaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PoliticaprivaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PoliticaprivaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
