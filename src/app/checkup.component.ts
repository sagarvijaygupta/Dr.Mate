import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Disease } from './disease';
import { DiseaseService } from './disease.service';
import { PersonInfo } from './personInfo';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import 'rxjs/add/operator/startWith';

@Component({
	selector: 'check-up',
	templateUrl: 'checkup.component.html',
	styleUrls: ['checkup.component.css']
})
export class CheckupComponent implements OnInit {
	person_info: PersonInfo;
	symptoms: string[];
	symptomsCtrl: FormControl; 
	filteredSymptoms: any;
	selectedSymptoms: string[] = [];
	probableDisease: any [];
	leftOverSymptoms: string [] =[];
	searchValue: string;
	MoreSymptoms: string[] = [];
	flag : boolean = true;
	flag2 : boolean = true;
	done: boolean = true;
	finalDisease : any;
	showSelectedSymptom: boolean;
	UserId : any;

	ngOnInit() {
		this.person_info = {
			sex: '',
			age: null,
			height: null,
			weight: null,
		}
		this.searchValue = "";
	}
	constructor(private diseaseService : DiseaseService,
		private _route: Router){
		this.symptomsCtrl = new FormControl();
		this.filteredSymptoms = this.symptomsCtrl.valueChanges
        .startWith(null)
        .map(name => this.filterSymptoms(name));
        this.showSelectedSymptom = false;	
	}

	filterSymptoms(val: string) {
    	return val ? this.symptoms.filter(s => new RegExp(`^${val}`, 'gi').test(s))
               : this.symptoms;
 	}

	onSubmit() {
		console.log(this.symptoms);
		this.showSelectedSymptom = true;
		this.diseaseService.getSymptoms().then((symptoms:string[]) => this.symptoms = symptoms);
	}

	addSymptom(selectedSymptom: string) {
		this.searchValue = null;
		this.selectedSymptoms.push(selectedSymptom);
		for (var i=0; i<this.symptoms.length; i++)
			if(this.symptoms[i] == selectedSymptom)
			{
				this.symptoms.splice(i,1);
				break;
			}
	}

	removeSymptom(selectedSymptom: string) {
		this.symptoms.push(selectedSymptom);
		for (var i=0; i<this.selectedSymptoms.length; i++)
			if(this.selectedSymptoms[i] == selectedSymptom) {
				this.selectedSymptoms.splice(i,1);
				break;
			}
	}

	diagnose() {
		this.probableDisease = this.diseaseService.getMoreSymptoms(this.selectedSymptoms, this.person_info);
		this.probableDisease.sort((n1,n2) => n2.count - n1.count);	
		if(this.probableDisease[0].count < 60) {
			for(var i=0; i<this.probableDisease.length; i++){
				for(var j=0; j<this.probableDisease[i].DISEASE.symptoms.length; j++) {	
					this.flag=true;
					for(let selectedSymptom of this.selectedSymptoms) {
						if(selectedSymptom == this.probableDisease[i].DISEASE.symptoms[j].id)
							this.flag=false;	
					}
					if(this.flag) {
						this.flag2=true;
						for(var k=0; k<this.leftOverSymptoms.length; k++) {
							if(this.probableDisease[i].DISEASE.symptoms[j].id == this.leftOverSymptoms[k]){
								this.flag2=false;
							}
						}
						if(this.flag2){
							this.leftOverSymptoms.push(this.probableDisease[i].DISEASE.symptoms[j].id);
						}
					}
				}
			}
		}
		else
		{
			this.diagnoseFurther();
		}
	}

	addMoreSymptom(symptom: string) {
		this.done = false;
		for(var i = 0; i < this.selectedSymptoms.length; ++i) {
			if(this.selectedSymptoms[i] == symptom) {
				this.selectedSymptoms.splice(i, 1);
				this.done = true;
				break;
			}
		}
		if(!this.done) {
			this.selectedSymptoms.push(symptom);
		}
	}

	diagnoseFurther() {
		this.finalDisease = this.diseaseService.getDiseases(this.selectedSymptoms, this.person_info);
		var userId = this.randomString(5, '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ');
		this.UserId = userId;
		this.diseaseService.storeKeyData(this.UserId, this.selectedSymptoms, this.finalDisease.DISEASE.name, this.person_info);
		console.log(userId);
	}
	
	randomString(len: number, cha: string) {
    var result = '';
    for (var i = len; i > 0; --i) result += cha[Math.floor(Math.random() * cha.length)];
    return result;
	}

	backToHome() {
		this.person_info = null;
		this.symptoms = [];
		this.filteredSymptoms = [];
		this.selectedSymptoms = [];
		this.probableDisease = [];
		this.leftOverSymptoms = [];
		this.MoreSymptoms = [];
		this.flag  = true;
		this.flag2 = true;
		this.done = true;
		this.showSelectedSymptom = false;
		this._route.navigate(['/home']);
	}
}
