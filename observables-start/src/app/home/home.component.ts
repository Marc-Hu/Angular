import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer';
import 'rxjs/Rx';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  monObservable : Subscription;
  monObservableCustom : Subscription;
  constructor() { }

  ngOnInit() {
    const monNombre = Observable.interval(1000).map(
      (data : number)=>{
        return data *2;
      }
    );
    this.monObservable = monNombre.subscribe(
      (number : number) => {
        console.log(number);
      }
    );
    const monObservable = Observable.create(
      (observer : Observer<string>)=>{
        setTimeout(() => {
          observer.next('Premier packé');
        }, 2000);
        setTimeout(() => {
          observer.next('Deuxième packé');
        }, 4000);
        setTimeout(() => {
          // observer.error('Sa ne fonctionne pas');
          observer.complete();
        }, 5000);
        setTimeout(() => {
          observer.next('Troisième packé');
        }, 6000);
      }
    );
    this.monObservableCustom = monObservable.subscribe(
      (information : string)=>{
        console.log(information);
      },
      (erreur : string)=>{
        console.log(erreur);
      },
      ()=>{
        console.log('Complété');
      },
    );
  }

  ngOnDestroy(){
    this.monObservable.unsubscribe();
    this.monObservableCustom.unsubscribe();
  }

}
