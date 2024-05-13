import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DestinosdetailsComponent } from './destinosdetails.component';

describe('DestinosdetailsComponent', () => {
  let component: DestinosdetailsComponent;
  let fixture: ComponentFixture<DestinosdetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DestinosdetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DestinosdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
