import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BottomTrafficLightComponent } from './bottom-traffic-light.component';

describe('BottomTrafficLightComponent', () => {
  let component: BottomTrafficLightComponent;
  let fixture: ComponentFixture<BottomTrafficLightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BottomTrafficLightComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BottomTrafficLightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
