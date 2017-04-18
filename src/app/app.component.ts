import { Component } from '@angular/core';
import { DISEASES } from './mock-disease'; 
import 'hammerjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
	title = "Hitman";
}
