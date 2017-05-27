import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('f') formulaire : NgForm;
  default= 'advanced';
  submitted=false;

  user={
    email : '',
    souscription : ''
  }

  submit(){
    if(!this.formulaire.valid){
      alert("Formulaire invalide!")
      return
    }
    this.submitted=true;
    console.log("Email : "+this.formulaire.value.email);
    console.log("Subscription : "+this.formulaire.value.subscription);
    this.user.email=this.formulaire.value.email
    this.user.souscription=this.formulaire.value.subscription
    this.formulaire.reset()
  }
}
