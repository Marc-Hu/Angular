import { Component } from '@angular/core';
import {UserService} from './user.service';
import {CounterService} from './counter.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  
  constructor (private userService : UserService, private countUser : CounterService){

  }
  activeUser : number=2;
  inactiveUser : number =2;
  active = this.countUser.activeUserCount.subscribe(
    (val : number) => {this.activeUser=val}
  );
  inactive = this.countUser.inactiveUserCount.subscribe(
    (val : number) => {this.inactiveUser=val}
  );

  activeUsers = this.userService.activeUsers;
  inactiveUsers = this.userService.inactiveUsers;

  onSetToInactive(id: number) {
    this.userService.pushUserInactive(id);
  }

  onSetToActive(id: number) {
    this.userService.pushUserActive(id);
  }
}


