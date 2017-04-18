import { Component } from '@angular/core';
import { DISEASES } from './mock-disease'; 
import { DiseaseService } from './disease.service';
import { Router } from '@angular/router';


import 'hammerjs';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
	feedback: boolean;
	feed: string;
	userId: string;
	constructor(private diseaseService : DiseaseService,
		private _route: Router) {
		this.feedback = false;
	}
	showFeedback() {
		this.feedback = true;
	}

	feedBack() {
		this.diseaseService.updateInfo(this.feed, this.userId);
		console.log(this.feed);
		this.feedback = false;
		this._route.navigate(['/home']);
	}
}
