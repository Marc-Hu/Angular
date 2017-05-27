import { Component } from '@angular/core';
import {LoggingService} from '../logging.service';
import {AccountService} from '../account.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
  // providers:[LoggingService],
})
export class NewAccountComponent {

  constructor(private loggingService : LoggingService, private accountService : AccountService){
    this.accountService.statusService.subscribe(
      (status: string) => alert('New Status : '+status)
    );
  }
  onCreateAccount(accountName: string, accountStatus: string) {
    this.accountService.pushAccount(accountName, accountStatus);
    // this.loggingService.logStatusChange(accountStatus);
    this.accountService.statusService.emit(accountStatus);
  }
}
