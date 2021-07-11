import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../services/firebase.service';
import { Validators, FormBuilder } from '@angular/forms';
import { Platform, LoadingController, ActionSheetController, ToastController, NavController } from '@ionic/angular';
import * as CryptoJS from 'crypto-js';
import * as Global from '../../config';
import { User } from 'firebase';

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
	user: User;

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

	async presentToast(text: string) {
		let toast = this.toastCtrl.create({
			message: text,
			position: 'bottom',
			duration: 1000,
		});

		await (await toast).present();
	}

	async submit(ev) {
		ev.preventDefault();
		let email = this.emailCtrl.value;
		let password = this.passwordCtrl.value;

		await this.firebaseService
			.login(email, password)
			.then((rs) => {
				if (rs.error) {
					this.presentToast(rs.error);
				} else {
					console.log('RS', rs);
					this.presentToast("Login Efetuado");
					this.navCtrl.navigateRoot('/professional-list');
				}
			})
	}

	ngOnInit() {}
}
