import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../services/firebase.service';
import { Validators, FormBuilder } from '@angular/forms';
import { Platform, LoadingController, ActionSheetController, ToastController, NavController } from '@ionic/angular';
import * as CryptoJS from 'crypto-js';
import * as Global from '../../config';

@Component({
	selector: 'app-login',
	templateUrl: './login.page.html',
	styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
	get emailCtrl() {
		return this.loginForm.get('email');
	}

	get passwordCtrl() {
		return this.loginForm.get('password');
	}

	loginForm = this.formBuilder.group({
		email: [' ', [Validators.required, Validators.pattern('^[a-zA-Z0-9._%-]+@[a-zA-Z0-9]+.[a-zA-Z]{2,4}$')]],
		password: ['', [Validators.required, Validators.pattern('(?=.*[A-Z])(?=.*[0-9]).{8,}')]],
	});

	constructor(
		private formBuilder: FormBuilder,
		private firebaseService: FirebaseService,
		private navCtrl: NavController,
		private toastCtrl: ToastController
	) {}

	async presentToast(text) {
		const toast = await this.toastCtrl.create({
			message: text,
			position: 'bottom',
			duration: 3000,
		});
		toast.present();
	}

	submit(ev) {
    ev.preventDefault()
		let email = this.emailCtrl.value;
		let password = this.passwordCtrl.value
		console.log(password);
		this.firebaseService.login(email, password).then((rs) => {
			if (rs.code == 'auth/invalid-email') {
				this.presentToast('Email Inválido');
				console.log('EMAIL INVÁLIDO');
			} else if (rs.code == 'auth/user-not-found') {
				this.presentToast('Usuário Não Encontrado. Email ou/e Senha Incorretos');
				console.log('USUÁRIO NÃO ENCONTRADO', rs);
			} else  {
        
					this.navCtrl.navigateRoot('/professional-list');
		
			}
		});
	}

	ngOnInit() {}
}
