import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-top-traffic-light',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './top-traffic-light.component.html',
  styleUrl: './top-traffic-light.component.css'
})
export class TopTrafficLightComponent {
  redLightColor: string = 'black';
  yellowLightColor: string = 'black';
  greenLightColor: string = 'black';
  colorInterval: any;
  badCrossing: boolean = false;

  constructor() {
    this.startColorInterval();
  }

  ngOnDestroy() {
    clearInterval(this.colorInterval);
  }

  private startColorInterval() {
    let currentPhase = 1;

    this.colorInterval = setInterval(() => {
      if (currentPhase == 1) {
        this.greenLightColor = 'green';
        setTimeout(() => {
          currentPhase = 2;
          this.yellowLightColor = 'yellow';
          this.greenLightColor = "black"
        }, 5000);
      } else if (currentPhase == 2) {
        setTimeout(() => {
          currentPhase = 3;
          this.redLightColor = "red"
          this.yellowLightColor = "black"
          this.greenLightColor = 'black';
        }, 2000);
      } else if (currentPhase == 3) {
        setTimeout(() => {
          currentPhase = 4;
          this.yellowLightColor = "yellow"
        }, 5000);
      } else {
        setTimeout(() => {
          currentPhase = 1;
          this.redLightColor = "black"
          this.yellowLightColor = "black"
          this.greenLightColor = "green"
        }, 2000)
      }
    });
  }

  enableCrossTheRoadButton(): boolean {
    return this.yellowLightColor === 'yellow' || this.greenLightColor === 'green' || (this.redLightColor == "red" && this.yellowLightColor == "yellow");
  }

  crossingTheRoad() {
    if (this.yellowLightColor == "yellow") {
      this.badCrossing = true;
      setTimeout(() => {
        this.badCrossing = false;
      }, 3000);
    }
  }
}
