import { Component } from '@angular/core';
import {ModalWindowService} from "./services/modal-window/modal-window.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor (public modalWindowService: ModalWindowService) {}
}
