import { Component, OnInit } from '@angular/core';
import { UsersService } from './users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  activatedUser1 = false;
  activatedUser2 = false;

  constructor(private users : UsersService){}

  ngOnInit(){
    this.users.userActivated.subscribe(
      (id : number)=>{
        if(id===1){
          this.activatedUser1 = true;
        } else if (id === 2) {
          this.activatedUser2 = true;
        }
      }
    );
  }
}
