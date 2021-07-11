import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFirestore, AngularFirestoreCollection, DocumentReference } from '@angular/fire/firestore';
import { User } from '../models/User';
import { map, take } from 'rxjs/operators';
import { AngularFireAuth } from '@angular/fire/auth';
import { Visitation } from '../models/Visitation';
import CryptoJS from 'crypto-js';
import * as Global from '../../config';
import { notEqual } from 'assert';

@Injectable({
	providedIn: 'root',
})
export class FirebaseService {
	private users: Observable<User[]>;
	private visitations: Observable<Visitation[]>;

	private usersCollection: AngularFirestoreCollection<User>;
	private visitationsCollection: AngularFirestoreCollection<Visitation>;

	constructor(private afs: AngularFirestore, private afAuth: AngularFireAuth) {
		this.usersCollection = this.afs.collection<User>('users');
		this.visitationsCollection = this.afs.collection<Visitation>('visitations');
		this.users = this.usersCollection.snapshotChanges().pipe(
			map((actions) => {
				return actions.map((a) => {
					const data = a.payload.doc.data();
					const id = a.payload.doc.data().id;
					return { id, ...data };
				});
			})
		);
		this.visitations = this.visitationsCollection.snapshotChanges().pipe(
			map((actions) => {
				return actions.map((a) => {
					const data = a.payload.doc.data();
					const id = a.payload.doc.data().id;
					return { id, ...data };
				});
			})
		);
	}

	//Authentication

	//login
	login(email: string, password: string): Promise<any> {
		let user: User[];
		return this.afAuth
			.signInWithEmailAndPassword(email, password)
			.then(async (res: any) => {
				this.getUserByPasswordAndEmail(email).subscribe((userData: User[]) => {
					console.log('USERDATA', userData);
					user = userData;
				});
				return { code: res, user: user };
			})
			.catch((error) => {
				console.log('Error', error);

				return { error: error };
			});
	}
	//logout
	async logout(): Promise<any> {
		return await this.afAuth.signOut();
	}
	//update Password
	async updatePassword(password: any, user: User): Promise<any> {
		return await ((await this.afAuth.currentUser).updatePassword(password), this.updateUser(user));
	}
	//update Email
	async updateEmail(email: any, user: User): Promise<any> {
		return await ((await this.afAuth.currentUser).updateEmail(email), this.updateUser(user));
	}

	//Users Collection CRUD
	//create
	async createUser(user: User): Promise<DocumentReference> {
		await this.afAuth
			.createUserWithEmailAndPassword(user.email, user.password)
			.then((res: any) => {
				console.log('RES');
				return this.usersCollection.add(user);
			})
			.catch((error: any) => console.log('Error, create user', error.message));
		return null;
	}

	//read
	getUsers(professional: any): Observable<User> {
		return this.usersCollection
			.doc<User>(professional)
			.valueChanges()
			.pipe(
				map((user) => {
					user.professional = professional;
					return user;
				})
			);
	}

	getUser(id: any, professional: any): Observable<User> {
		return this.usersCollection
			.doc<User>(id)
			.valueChanges()
			.pipe(
				take(1),
				map((user) => {
					user.id = id;
					user.professional = professional;
					return user;
				})
			);
	}

	getUserByPasswordAndEmail(email: string): Observable<User[]> {
		console.log('EMAIL:', email);
		const id = this.afs.createId();
		console.log('')
		return this.afs.collection<User>('users', ref => ref.where('email', '==', email)).valueChanges()
			.pipe(
				take(1),
				map((user) => {
					user[0].email = email;
					console.log('USER:', user);
					return user;
				})
			);
	}

	//update
	updateUser(user: User): Promise<void> {
		return this.usersCollection.doc(user.id).update(user);
	}

	updateUserPassowork(id: any, password: string): Promise<void> {
		return this.usersCollection.doc(id).update({ password: password });
	}

	//delete
	async deleteUser(id: any): Promise<void> {
		return (await this.afAuth.currentUser).delete, this.usersCollection.doc(id).delete();
	}

	//Visitations Collection CRUD

	//create
	createVisitation(visitation: Visitation): Promise<DocumentReference> {
		return this.visitationsCollection.add(visitation);
	}

	//read
	getVisitationsByClient(user: User): Observable<Visitation> {
		return this.visitationsCollection
			.doc<Visitation>(CryptoJS.MD5(user.code, Global.SALT_KEY).toString())
			.valueChanges()
			.pipe(
				map((visitation) => {
					visitation.client.id = user.id;
					return visitation;
				})
			);
	}

	getVisitationsByProfessional(user: User): Observable<Visitation> {
		return this.visitationsCollection
			.doc<Visitation>(CryptoJS.MD5(user.code, Global.SALT_KEY).toString())
			.valueChanges()
			.pipe(
				map((visitation) => {
					visitation.professional.id = user.id;
					return visitation;
				})
			);
	}

	//update
	updateVisation(visitation: Visitation): Promise<void> {
		return this.visitationsCollection.doc(visitation.id).update(visitation);
	}

	//delete
	deleteVisitation(id: any): Promise<void> {
		return this.visitationsCollection.doc(id).delete();
	}
}
