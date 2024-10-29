import { Component, OnInit } from '@angular/core';

import { DUMMY_USERS } from '../dummy-users';

const randomINdex = Math.floor(Math.random() * DUMMY_USERS.length);

@Component({
  selector: 'app-user',
  standalone: true,
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent {
  selectedUser = DUMMY_USERS[randomINdex];

  get imagePath() {
    return 'assets/users/' + this.selectedUser.avatar;
  }

  onSelectUser() {
    console.log('Clicked!');
  }
}
