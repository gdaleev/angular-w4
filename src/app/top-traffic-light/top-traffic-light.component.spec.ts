import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopTrafficLightComponent } from './top-traffic-light.component';

describe('TopTrafficLightComponent', () => {
  let component: TopTrafficLightComponent;
  let fixture: ComponentFixture<TopTrafficLightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TopTrafficLightComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TopTrafficLightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
