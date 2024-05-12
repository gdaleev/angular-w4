import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RightTrafficLightComponent } from './right-traffic-light.component';

describe('RightTrafficLightComponent', () => {
  let component: RightTrafficLightComponent;
  let fixture: ComponentFixture<RightTrafficLightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RightTrafficLightComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RightTrafficLightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
