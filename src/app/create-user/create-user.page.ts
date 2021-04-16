import { Component, OnInit } from '@angular/core';
import { FormsModule, FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Platform, LoadingController, ActionSheetController, ToastController } from '@ionic/angular';
import { WebView } from '@ionic-native/ionic-webview/ngx';
import { Camera, PictureSourceType, CameraOptions } from '@ionic-native/camera/ngx';
import { File, FileEntry } from '@ionic-native/file/ngx';
import * as utf8 from 'crypto-js/enc-utf8';
import * as AES from 'crypto-js/aes';
import { finalize } from 'rxjs/operators';
import * as global from '../../config..js';
import { HttpClient } from '@angular/common/http';

@Component({
	selector: 'app-create-user',
	templateUrl: './create-user.page.html',
	styleUrls: ['./create-user.page.scss'],
})
export class CreateUserPage implements OnInit {
	imagePath: '';

	professionalSpeciality = [
		{ name: 'Yoga', value: 1 },
		{ name: 'Pilates', value: 2 },
		{ name: 'Psicologia', value: 4 },
		{ name: 'Psicanalise', value: 5 },
		{ name: 'Terapia Ocupacional', value: 5 },
		{ name: 'Nutrição', value: 6 },
		{ name: 'Endrocrinologia', value: 7 },
		{ name: 'Quiropraxia', value: 8 },
		{ name: 'Personal Trainer', value: 9 },
	];

	registrationForm = this.formBuilder.group({
		name: ['', Validators.required],
		email: [' ', [Validators.required, Validators.pattern('^[a-zA-Z0-9._%-]+@[a-zA-Z0-9]+.[a-zA-Z]{2,4}$')]],
		password: ['', [Validators.required, Validators.pattern('(?=.*[A-Z])(?=.*[0-9]).{8,}')]],
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

	get passwordCtrl() {
		return this.registrationForm.get('password');
	}

	public errorMessages = {
		name: [{ type: 'required', message: 'Coloque seu Nome Completo' }],
		email: [
			{ type: 'required', message: 'Coloque seu Email' },
			{ type: 'pattern', message: 'Email Inválido. Preencha com um Email Válido' },
		],
		password: [
			{ type: 'required', message: 'Coloque uma Senha' },
			{
				type: 'pattern',
				message: 'A senha precisa ter no minimo 8 caracteres e pelo menos uma letra maiúscula e um número.',
			},
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

	constructor(
		private formBuilder: FormBuilder,
		private platformCtrl: Platform,
		private loadingController: LoadingController,
		private webViewCtrl: WebView,
		private actionSheetCtrl: ActionSheetController,
		private camera: Camera,
		private file: File,
		private toastCtrl: ToastController,
		private http: HttpClient
	) {}

	public submit() {
		// AES.decrypt(userdata, your_encKey).toString(utf8);
		this.registrationForm.controls['password'].setValue(
			AES.encrypt(this.registrationForm.get('password').value, global.SALT_KEY).toString()
		);
		console.log(global.SALT_KEY);
		console.log('Form', this.registrationForm.value);
	}

	public pathForImage(img) {
		if (img === null) {
			return '';
		} else {
			let converted = this.webViewCtrl.convertFileSrc(img);
			return converted;
		}
	}

	async selectedPhoto() {
		const actionSheet = await this.actionSheetCtrl.create({
			header: 'Selecione sua foto',
			buttons: [
				{
					text: 'Carregar da Galeria',
					handler: () => {
						this.takePhoto(this.camera.PictureSourceType.PHOTOLIBRARY);
					},
				},
				{
					text: 'Tirar Selfie',
					handler: () => {
						this.takePhoto(this.camera.PictureSourceType.CAMERA);
					},
				},
				{
					text: 'Cancelar',
					role: 'cancel',
				},
			],
		});
		actionSheet.present();
	}

	public takePhoto(sourceType: PictureSourceType) {
		let avatarElement = document.getElementById('avatar');
		var options: CameraOptions = {
			quality: 100,
			sourceType: sourceType,
			saveToPhotoAlbum: false,
			correctOrientation: true,
		};

		this.camera.getPicture(options).then((photoPath) => {
			console.log('File Path:', photoPath);
			this.imagePath = photoPath;
			avatarElement.style.backgroundImage = 'url(' + this.pathForImage(this.imagePath) + ')';
			avatarElement.style.backgroundPosition = '0 0/100% 100% no-repeat;';
			avatarElement.style.backgroundSize = '100%';
		});
	}

	public sendSignUp() {
		this.file
			.resolveLocalFilesystemUrl(this.imagePath)
			.then((entry) => {
				(<FileEntry>entry).file((file) => this.readFile);
			})
			.catch((error) => {
				this.presentToast('Não foi feito o upload da foto de perfil');
			});
	}

	async uploadImageData(formData: FormData) {
		const loading = await this.loadingController.create({
			message: 'Enviando foto do perfil...',
		});
		await loading.present();
		console.log(formData)

		// this.http
		// 	.post('http://localhost:8888/upload.php', formData)
		// 	.pipe(
		// 		finalize(() => {
		// 			loading.dismiss();
		// 		})
		// 	)
		// 	.subscribe((res) => {
		// 		if (res['success']) {
		// 			this.presentToast('File upload complete.');
		// 		} else {
		// 			this.presentToast('File upload failed.');
		// 		}
		// 	});
	}
	public readFile(file: any) {
		const reader = new FileReader();
		reader.onloadend = () => {
			const formData = new FormData();
			const imgBlob = new Blob([reader.result], {
				type: file.type,
			});
			formData.append('file', imgBlob, file.name);
			this.uploadImageData(formData);
		};
	}

	async presentToast(text) {
		const toast = await this.toastCtrl.create({
			message: text,
			position: 'bottom',
			duration: 3000,
		});
		toast.present();
	}

	ngOnInit() {}
}
