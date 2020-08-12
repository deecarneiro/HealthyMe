import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFirestore, AngularFirestoreCollection, DocumentReference } from '@angular/fire/firestore';
import { User } from './models/User';
import { map, take } from 'rxjs/operators';
import { NavController } from '@ionic/angular';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
	providedIn: 'root',
})
export class FirebaseService {
  private users: Observable<User[]>;

	private usersCollection: AngularFirestoreCollection<User>;

	constructor(private afs: AngularFirestore, private afAuth: AngularFireAuth, private navCtrl: NavController) {
		this.usersCollection = this.afs.collection<User>('users');
		this.users = this.usersCollection.snapshotChanges().pipe(
			map((actions) => {
				return actions.map((a) => {
					const data = a.payload.doc.data();
					const id = a.payload.doc.data().id;
					return { id, ...data };
				});
			})
		);
	}

	//auth
	async loginUser(email: string, password: string): Promise<any> {
		let user: Observable<User>;
		this.afAuth.signInWithEmailAndPassword(email, password).then((res: any) => {
			user = this.getUserByPasswordAndPassword(email, password);
		});
		return user;
	}

	//create
	createUser(user: User): Promise<DocumentReference> {
		this.afAuth
			.createUserWithEmailAndPassword(user.email, user.password)
			.then((res: any) => {
				return this.usersCollection.add(user);
			})
			.catch((error: any) => console.error(error));
		return null;
	}

	//read
	getUsers(professional: any): Observable<User> {
		return this.usersCollection
			.doc<User>(professional)
			.valueChanges()
			.pipe(
				map((user) => {
					user.professional - professional;
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
					user.id - id;
					user.professional - professional;
					return user;
				})
			);
	}

	getUserByPasswordAndPassword(email: any, password: any): Observable<User> {
		return this.usersCollection
			.doc<User>()
			.valueChanges()
			.pipe(
				take(1),
				map((user) => {
					user.email - email;
					user.password - password;
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
	deleteUser(id: any): Promise<void> {
		return this.usersCollection.doc(id).delete();
	}

	//Visitations
	//create
	createVisitation(userProfessional: User, userClient: User, visitation: any): Promise<any> {
		return (
			this.usersCollection.doc(userProfessional.id).collection('visitations').add(visitation),
			this.usersCollection.doc(userClient.id).collection('visitations').add(visitation)
		);
	}
  //read
	getVisitationsByUserId(user: User): Observable<[]> {
		return this.usersCollection
			.doc<User>(user.id)
			.valueChanges()
			.pipe(
				map((user) => {
					user.id - user.id;
					return user.visitations;
				})
			);
  }
  //update
  updateVisitationsByUserId(user: User): Observable<[]> {
		return this.usersCollection
			.doc<User>(user.id)
			.valueChanges()
			.pipe(
				map((user) => {
					user.id - user.id;
					return user.visitations;
				})
			);
  }
  //delete
}
