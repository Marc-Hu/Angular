import {Injectable} from '@angular/core';
import {CounterService} from './counter.service';

@Injectable()
export class UserService{
  activeUsers = ['Max', 'Anna'];
  inactiveUsers = ['Chris', 'Manu'];
  
 
  constructor (private countUser : CounterService){

  }
  pushUserActive(id : number){
      this.activeUsers.push(this.inactiveUsers[id]);
      this.inactiveUsers.splice(id, 1);
      this.countUser.addUser(this.activeUsers.length, this.inactiveUsers.length);
  }

  pushUserInactive(id : number){
      this.inactiveUsers.push(this.activeUsers[id]);
      this.activeUsers.splice(id, 1);
      this.countUser.addUser(this.activeUsers.length, this.inactiveUsers.length);
  }
}

