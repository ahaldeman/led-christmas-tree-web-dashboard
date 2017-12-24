import { Component } from '@angular/core';
import { ModesService } from './modes/shared/modes.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'LED Christmas Tree Dashboard';

  constructor(private modesService: ModesService) {

  }

  handleClick(mode: string) {
    console.log("CLICKED");
    console.log("Mode Selected: " + mode);
    this.modesService.setMode(mode);
  }
}
