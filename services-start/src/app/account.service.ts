import {Injectable, EventEmitter} from '@angular/core';

import {LoggingService} from './logging.service';

@Injectable()
export class AccountService{
    accounts = [
    {
      name: 'Master Account',
      status: 'active'
    },
    {
      name: 'Testaccount',
      status: 'inactive'
    },
    {
      name: 'Hidden Account',
      status: 'unknown'
    }
  ];
  statusService = new EventEmitter<string>();

  constructor (private logginService : LoggingService){

  }

  pushAccount(name : string, status : string){
    this.accounts.push({name : name, status : status});
    this.logginService.logStatusChange(status);
  }

  updateStatus(id : number, newStatus : string){
    this.accounts[id].status = newStatus;
    this.logginService.logStatusChange(newStatus);
  }
}