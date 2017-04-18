import { Disease } from './disease';
export const DISEASES: Disease[] = [
	{
		name: "Diphtheria",
		symptoms: [
			{
				id: "Sore throat",
				weight: 30
			},
			{
				id: "Hoarseness",
				weight: 50
			},
			{
				id: "Difficulty in breathing",
				weight: 20
			}
		],
		age: [
			{
				group: 5,
				male: 10,
				female: 20
			},
			{
				group: 13,
				male: 13,
				female: 19
			},
			{
				group: 21,
				male: 25,
				female: 25
			},
			{
				group: 50,
				male: 20,
				female: 10
			},
			{
				group: 100,
				male: 50,
				female: 60
			}
		],
		obesity_freq: 2,
		reappearance_freq: 0,
		count: 252,
	},
	{
		name: "Whooping Cough",
		symptoms: [
			{
				id: "Whooping sound",
				weight: 45
			},
			{
				id: "Face becomes red during coughing",
				weight: 30
			},
			{
				id: "Convulsions",
				weight: 15
			},

			{
				id: "Cough",
				weight: 10
			}
		],
		age: [
			{
				group: 5,
				male: 34,
				female: 31
			},
			{
				group: 13,
				male: 22,
				female: 19
			},
			{
				group: 21,
				male: 12,
				female: 11
			},
			{
				group: 50,
				male: 44,
				female: 54
			},
			{
				group: 100,
				male: 56,
				female: 60
			}
		],
		obesity_freq: 1,
		reappearance_freq: 53,
		count: 343,
	},
	{
		name: "Tetanus",
		symptoms: [
			{
				id: "Spasms of muscles of the jaw and face",
				weight: 60
			},
			{
				id: "Severe pain often fatal",
				weight: 40
			}
		],
		age: [
			{
				group: 5,
				male: 3,
				female: 3
			},
			{
				group: 13,
				male: 28,
				female: 39
			},
			{
				group: 21,
				male: 43,
				female: 34
			},
			{
				group: 50,
				male: 32,
				female: 35
			},
			{
				group: 100,
				male: 12,
				female: 14
			}
		],
		obesity_freq: 2,
		reappearance_freq: 23,
		count: 243,
	},
	{
		name: "Bubonic Plague",
		symptoms: [
			{
				id: "High Fever",
				weight: 40
			},
			{
				id: "Bubo in grain or armpit",
				weight: 40
			},
			{
				id: "Cough",
				weight: 20
			}
		],
		age: [
			{
				group: 5,
				male: 23,
				female: 21
			},
			{
				group: 13,
				male: 29,
				female: 41
			},
			{
				group: 21,
				male: 43,
				female: 44
			},
			{
				group: 50,
				male: 21,
				female: 23
			},
			{
				group: 100,
				male: 23,
				female: 33
			}
		],
		obesity_freq: 3,
		reappearance_freq: 31,
		count: 301,
	},
	{
		name: "Gonorrhea",
		symptoms: [
			{
				id: "Acute inflamation of urethra",
				weight: 60
			},
			{
				id: "Painful urination",
				weight: 40
			},
			{
				id: "Abdominal discomfort",
				weight: 28
			},
			{
				id: "Vaginal discharge",
				weight: 22
			},
			{
				id: "Abnormla utirine bleeding",
				weight: 20
			},
			{
				id: "Pelvic inflamation",
				weight: 20
			},
			{
				id: "Sterility",
				weight: 10
			}
		],
		age: [
			{
				group: 5,
				male: 0,
				female: 0
			},
			{
				group: 13,
				male: 3,
				female: 10
			},
			{
				group: 21,
				male: 32,
				female: 55
			},
			{
				group: 50,
				male: 34,
				female: 43
			},
			{
				group: 100,
				male: 23,
				female: 3
			}
		],
		obesity_freq: 5,
		reappearance_freq: 1000,
		count: 203,
	},
	{
		name: "Influenza",
		symptoms: [
			{
				id: "Sore throat",
				weight: 20
			},
			{
				id: "Headache",
				weight: 20
			},
			{
				id: "Fever",
				weight: 20
			},
			{
				id: "Sneezing",
				weight: 22
			},
			{
				id: "Pain all over the body",
				weight: 20
			},
			{
				id: "Nasal",
				weight: 20
			}
		],
		age: [
			{
				group: 5,
				male: 34,
				female: 36
			},
			{
				group: 13,
				male: 54,
				female: 34
			},
			{
				group: 21,
				male: 43,
				female: 23
			},
			{
				group: 50,
				male: 54,
				female: 45
			},
			{
				group: 100,
				male: 34,
				female: 33
			}
		],
		obesity_freq: 5,
		reappearance_freq: 100,
		count: 390,
	},
	{
		name: "Chicken Pox",
		symptoms: [
			{
				id: "Mild Fever",
				weight: 32
			},
			{
				id: "Rashes",
				weight: 34
			},
			{
				id: "Aches",
				weight: 23
			},
			{
				id: "No scar left",
				weight: 11
			}
		],
		age: [
			{
				group: 5,
				male: 23,
				female: 22
			},
			{
				group: 13,
				male: 24,
				female: 23
			},
			{
				group: 21,
				male: 12,
				female: 12
			},
			{
				group: 50,
				male: 23,
				female: 22
			},
			{
				group: 100,
				male: 12,
				female: 13
			}
		],
		obesity_freq: 3,
		reappearance_freq: 1,
		count: 186,
	},
	{
		name: "Mumps",
		symptoms: [
			{
				id: "Painful swelling",
				weight: 70
			},
			{
				id: "Pain in salivary glands",
				weight: 30
			}
		],
		age: [
			{
				group: 5,
				male: 12,
				female: 12
			},
			{
				group: 13,
				male: 32,
				female: 26
			},
			{
				group: 21,
				male: 56,
				female: 55
			},
			{
				group: 50,
				male: 45,
				female: 35
			},
			{
				group: 100,
				male: 23,
				female: 33
			}
		],
		obesity_freq: 2,
		reappearance_freq: 23,
		count: 329,
	},
	{
		name: "Diabetes",
		symptoms: [
			{
				id: "Hunger",
				weight: 7
			},
			{
				id: "Fatigue",
				weight: 13
			},
			{
				id: "Peeing more often",
				weight: 25
			},
			{
				id: "Dry mouth",
				weight: 15
			},
			{
				id: "Itchy Skin",
				weight: 15
			},
			{
				id: "Blurred Vision",
				weight: 15
			}
		],
		age: [
			{
				group: 5,
				male: 1,
				female: 2
			},
			{
				group: 13,
				male: 4,
				female: 6
			},
			{
				group: 21,
				male: 3,
				female: 6
			},
			{
				group: 50,
				male: 34,
				female: 39
			},
			{
				group: 100,
				male: 43,
				female: 48
			}
		],
		obesity_freq: 135,
		reappearance_freq: 1000,
		count: 186,
	}
];