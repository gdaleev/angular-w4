import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeftTrafficLightComponent } from './left-traffic-light.component';

describe('LeftTrafficLightComponent', () => {
  let component: LeftTrafficLightComponent;
  let fixture: ComponentFixture<LeftTrafficLightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LeftTrafficLightComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LeftTrafficLightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
