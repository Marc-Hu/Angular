import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('f') submitForm : NgForm;
  defaultQuestion = 'pet';
  answer : String;
  genders=['homme', 'femelle'];
  submitted=false;

  user = {
    username : '',
    email : '',
    secretQuestion : '',
    answer : '',
    gender : ''
  };

  suggestUserName() {
    const suggestedName = 'Superuser';
    // this.submitForm.setValue({
    //   userdata : {
    //     username:suggestedName,
    //     email:''
    //   },
    //   secret : 'pet',
    //   questionAwnser: '',
    //   d:'homme'
    // });
    this.submitForm.form.patchValue({
      userdata : {
        username:suggestedName
      }
    });
  }

  // onSubmit(form : NgForm){
  //   console.log(form.value.username);
  // }

  onSubmit(){
    this.submitted= true;
    this.user.username=this.submitForm.value.userdata.username;
    this.user.email=this.submitForm.value.userdata.email;
    this.user.secretQuestion=this.submitForm.value.secret;
    this.user.answer=this.submitForm.value.questionAwnser;
    this.user.gender=this.submitForm.value.d;

    this.submitForm.reset();
  }
}
