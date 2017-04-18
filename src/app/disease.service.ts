import { Injectable } from '@angular/core';
import { Disease } from './disease';
import { DISEASES } from './mock-disease';
import { PersonInfo } from './personInfo'; 
@Injectable()
export class DiseaseService {

	temp : string[]=[];
	flag: boolean = true;
	probableDiseases: any[]=[];
	probableDisease: any[] = [];
	diseaseCount: number[]=[];
	sortedDiseaseSymptoms : any [];
	sortedDiseaseAge : any [];
	score: number[] = [];
	userIdSymptoms : any[] =[];
	iter: boolean[]=[];

	getSymptoms() {
		for (let disease of DISEASES ) {
			for(let symptom of disease.symptoms) {
				this.flag=true;
				for(var i = 0; i < this.temp.length; ++i) {
					if(symptom.id == this.temp[i]) {
						this.flag = false;
						break;
					}
				}
				if(this.flag)
					this.temp.push(symptom.id);
			}
		}
		this.temp.sort();
		// console.log(this.temp);
		return Promise.resolve(this.temp);
	}


	getMoreSymptoms(selectedSymptoms: string[], person_info: PersonInfo) {
		this.probableDiseases = [];
		this.probableDisease = [];
		this.diseaseCount = [];
		for(let disease of DISEASES) {
			this.probableDisease.push({
				DISEASE: disease,
				count: 0
			});
		}
		for(var i = 0; i < selectedSymptoms.length; ++i) {
			for(var j = 0; j < DISEASES.length; ++j) {
				for(var k = 0; k < DISEASES[j].symptoms.length; ++k) {
					if(selectedSymptoms[i] == DISEASES[j].symptoms[k].id) {
						this.probableDisease[j].count += DISEASES[j].symptoms[k].weight;
					}
				}
			}
		}

		for(var i = 0; i < this.probableDisease.length; ++i) {
			if(this.probableDisease[i].count > 0) {
				this.probableDiseases.push(this.probableDisease[i]);
			}
		}
		return this.probableDiseases;
	}

	getDiseases(selectedSymptoms: string[], person_info: PersonInfo) {
		this.probableDiseases = this.getMoreSymptoms(selectedSymptoms, person_info);
		this.sortedDiseaseSymptoms=this.probableDiseases.sort((n1, n2) => n2.count - n1.count);

		var group=(person_info.age < 5)?0 :(person_info.age < 13)?1:(person_info.age < 21)?2:(person_info.age < 50)?3:4;
		var sex = (person_info.sex == "Male")?2:0;
		this.sortedDiseaseAge=this.probableDiseases.sort((n1, n2) => n2.DISEASE.age[group][sex] - n1.DISEASE.age[group][sex]);

		for(var i = 0; i < this.sortedDiseaseSymptoms.length; ++i) {
			for(var j = 0; j < this.sortedDiseaseAge.length; ++j) {
				if(this.sortedDiseaseAge[j] == this.sortedDiseaseSymptoms[i]) {
					this.score.push((i + 1) * 65 + (j + 1) * 35);
				}
			}
		}
		var minn=this.score[0],loc=0;
		for(var i=0; i<this.score.length; i++){
			if(minn>this.score[i]){
				minn=this.score[i];
				loc=i;
			}
		}
		
		return this.sortedDiseaseSymptoms[loc];
	}

	storeKeyData(userId:string, symptoms:any[], disease:Disease, person_info:PersonInfo) {
		this.userIdSymptoms.push({
			userid: userId,
			disease: disease,
			symptom: symptoms,
			person_info: person_info
		});
		console.log(this.userIdSymptoms[this.userIdSymptoms.length-1].userid);
	}
	updateInfo(feed: string, userId: string) {
		var loc;
		for(var i=0; i<this.userIdSymptoms.length; i++){
			if(this.userIdSymptoms[i].userid == userId){
				for(var j=0; j<DISEASES.length; j++){
					if(DISEASES[j].name == this.userIdSymptoms[i].disease){
						loc = i;			
						if(feed == "yes") {

							var group=(this.userIdSymptoms[i].person_info.age < 5)?0 :(this.userIdSymptoms[i].person_info.age < 13)?1:(this.userIdSymptoms[i].person_info.age < 21)?2:(this.userIdSymptoms[i].person_info.age < 50)?3:4;
							var sex = (this.userIdSymptoms[i].person_info.sex == "Male")?2:0;
							DISEASES[j].age[group][sex]++;
							DISEASES[j].count++;
							for(var k=0; k<this.userIdSymptoms[i].symptom.length; k++) {
								for(var l=0; l<DISEASES[j].symptoms.length; l++) {
									this.iter.push(false);
									if(this.userIdSymptoms[i].symptom[k] == DISEASES[j].symptoms[l].id) {
										DISEASES[j].symptoms[l].weight += DISEASES[j].symptoms[l].weight/DISEASES[j].count;
										this.iter[l]=true;
									}
								}
							}
							for(var l=0; l<DISEASES[j].symptoms.length; l++){
								if(this.iter[l]==false) {
									DISEASES[j].symptoms[l].weight -= DISEASES[j].symptoms[l].weight/DISEASES[j].count;
								}
							}
						}
						else {
							for(var k=0; k<this.userIdSymptoms[i].symptom.length; k++) {
								for(var l=0; l<DISEASES[j].symptoms.length; l++){
									if(this.userIdSymptoms[i].symptom[k] == DISEASES[j].symptoms[l].id){
										DISEASES[j].symptoms[l].weight -= DISEASES[j].symptoms[l].weight/DISEASES[j].count;
										this.iter[l]=true;
									}
								}
							}
							for(var l=0; l<DISEASES[j].symptoms.length; l++){
								if(this.iter[l]==false) {
									DISEASES[j].symptoms[l].weight += DISEASES[j].symptoms[l].weight/DISEASES[j].count;
								}
							}
						}
						break;
					}
				}
			}
		}
	}
}