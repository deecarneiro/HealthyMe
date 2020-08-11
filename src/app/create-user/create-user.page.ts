import { Component, OnInit } from '@angular/core';
import { FormsModule, FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
	selector: 'app-create-user',
	templateUrl: './create-user.page.html',
	styleUrls: ['./create-user.page.scss'],
})
export class CreateUserPage implements OnInit {


  professionalSpeciality = [
    {name:'Yoga', value: 1},
    {name:'Pilates', value:2},
    {name:'Psicologia', value:4},
    {name:'Psicanalise', value:5},
    {name:'Terapia Ocupacional', value:5}, 
    {name:'Nutrição', value:6},
    {name:'Endrocrinologia', value:7},
    {name:'Quiropraxia', value:8},
    {name:'Personal Trainer', value:9} 
  ]

  registrationForm = this.formBuilder.group({
		name: ['', Validators.required],
		email: [' ', [Validators.required, Validators.pattern('^[a-zA-Z0-9._%-]+@[a-zA-Z0-9]+.[a-zA-Z]{2,4}$')]],
		code: ['', [Validators.required, Validators.pattern('^[0-9]{3}.?[0-9]{3}.?[0-9]{3}-?[0-9]{2}$')]],
		birthday: [new Date(), [Validators.required]],
		profileImage: [new FileReader(), [Validators.required]],
		professional: ['', [Validators.required]],
		zipcode: ['', [Validators.required, Validators.pattern('^[0-9]{5}-[0-9]{3}$')]],
		address: ['', [Validators.required]],
		type: [''],
	});
	get nameCtrl() {
		return this.registrationForm.get('name');
	}
	get emailCtrl() {
		return this.registrationForm.get('email');
	}
	get codeCtrl() {
		return this.registrationForm.get('code');
	}

	get birthdayCtrl() {
		return this.registrationForm.get('birthday');
	}
	get profileImageCtrl() {
		return this.registrationForm.get('profileImage');
	}

	get professionalCtrl() {
		return this.registrationForm.get('professional');
	}

	get zipcodeCtrl() {
		return this.registrationForm.get('zipcode');
	}
	get typeCtrl() {
		return this.registrationForm.get('type');
	}

	get addressCtrl() {
		return this.registrationForm.get('address');
	}

	public errorMessages = {
		name: [{ type: 'required', message: 'Coloque seu Nome Completo' }],
		email: [
			{ type: 'required', message: 'Coloque seu Email' },
			{ type: 'pattern', message: 'Email Inválido. Preencha com um Email Válido' },
		],
		code: [
			{ type: 'required', message: 'Coloque seu CPF' },
			{ type: 'pattern', message: 'CPF Inválido. Preencha com um CPF Válido' },
		],
		birthday: [{ type: 'required', message: 'Coloque sua Data de Nascimento' }],
		profileImage: [{ type: 'required', message: 'Faça um Upload da sua Foto de Perfil' }],
		professional: [{ type: 'required', message: 'Selecione seu Tipo de Perfil' }],
		zipcode: [
			{ type: 'required', message: 'Coloque seu CEP' },
			{ type: 'pattern', message: 'CEP Inválido. Preencha com um CEP Válido' },
		],
		address: [{ type: 'required', message: 'Coloque seu Endereço' }],
	};

	constructor(private formBuilder: FormBuilder) {}

	public submit() {
		console.log('Form', this.registrationForm.value);
	}

	ngOnInit() {}
}
