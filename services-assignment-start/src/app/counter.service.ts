import {EventEmitter, Output} from '@angular/core'

export class CounterService{
    @Output() activeUserCount= new EventEmitter<number>();
    @Output() inactiveUserCount= new EventEmitter<number>();

    addUser(newActiveNumber : number, newInactiveNumber : number){
        this.activeUserCount.emit(newActiveNumber);
        this.inactiveUserCount.emit(newInactiveNumber);
    }
}

