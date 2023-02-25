import { Component } from '@angular/core';
import {TelegramService} from "./services/telegram.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(
    private telegram: TelegramService
  ) {
  }
  onClick() {
    this.telegram.close()
  }
}
