import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../services/firebase.service';
import { Observable } from 'rxjs';
import { User } from '../models/User';

@Component({
  selector: 'app-professional-list',
  templateUrl: './professional-list.page.html',
  styleUrls: ['./professional-list.page.scss'],
})
export class ProfessionalListPage implements OnInit {
  private users: Observable<User[]>;

  constructor(private firebaseService : FirebaseService) { }

  ngOnInit() {
    // this.users = this.firebaseService.getUsers(1);

  }

}
