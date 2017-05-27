import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { Observable } from 'rxjs/Observable'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  genders = ['male', 'female'];
  userInterdit=['Chris', 'Anna'];
  signupForm : FormGroup;

  ngOnInit(){
    this.signupForm=new FormGroup({
      'userData':new FormGroup({
        'username':new FormControl(null, [Validators.required, this.nomInterdit.bind(this)]),
        'email':new FormControl (null, [Validators.required, Validators.email], this.emailInterdit)
      }),
      'gender':new FormControl('female'),
      'hobbies':new FormArray([])
    });
    // this.signupForm.valueChanges.subscribe(
    //   (value)=>{
    //     console.log(value);
    //   }
    // )
    this.signupForm.statusChanges.subscribe(
      (status)=>{
        console.log(status);
      }
    )
    this.signupForm.setValue({
      'userData':{
        'username' : 'Marc',
        'email' : 'marc@test.com'
      },
      'gender':'male',
      'hobbies':[]
    });
    this.signupForm.patchValue({
      'userData':{
        'username' : 'Fanny',
      }
    });
  }

  onSubmit(){
    console.log(this.signupForm);
    this.signupForm.reset();
  }

  onHadHobbies(){
    const hobbie = new FormControl(null, Validators.required);
    (<FormArray>this.signupForm.get('hobbies')).push(hobbie);
  }

  nomInterdit (control : FormControl) : {[s : string] : boolean}{
    if( this.userInterdit.indexOf(control.value) !== -1){
      return {'nomInterdit':true};
    }
    return null;
  }

  emailInterdit(control : FormControl) : Promise<any> | Observable<any>{
      const promise = new Promise<any> ((resolve, reject)=>{
        setTimeout(()=>{
          if(control.value === 'test@test.com'){
            resolve({'emailIsForbidden' : true});
          } else {
            resolve(null);
          }
        },1500);
      });
      return promise;
  }
}
