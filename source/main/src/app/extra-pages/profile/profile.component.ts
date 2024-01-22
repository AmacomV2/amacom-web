import { Component, OnInit } from '@angular/core';
import { AuthService, User } from '@core';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit{
  data: User;

  get edad(){
    return this.data.person.birthDate ? new Date().getFullYear() - new Date(this.data.person.birthDate).getFullYear() : 0;
  }

  constructor(private userService: AuthService) {
    // constructor code
  }

  ngOnInit() {
    this.data = this.userService.currentUserValue;
    console.log(this.data);
    console.log(this.data.person);
  }
}
