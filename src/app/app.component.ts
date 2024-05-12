import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TopTrafficLightComponent } from './top-traffic-light/top-traffic-light.component';
import { LeftTrafficLightComponent } from './left-traffic-light/left-traffic-light.component';
import { RightTrafficLightComponent } from './right-traffic-light/right-traffic-light.component';
import { BottomTrafficLightComponent } from './bottom-traffic-light/bottom-traffic-light.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TopTrafficLightComponent, LeftTrafficLightComponent, RightTrafficLightComponent, BottomTrafficLightComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'traffic-lights';
}
