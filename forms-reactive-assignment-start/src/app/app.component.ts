import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  practice : FormGroup;
  invalidProject = 'Test';

  ngOnInit(){
    this.practice=new FormGroup({
      'projectName' : new FormControl(null, [Validators.required], this.invalidProjectName),
      'email' : new FormControl(null, [Validators.email, Validators.required]),
      'status' : new FormControl('Stable')
    });
  }

  onSubmit(){
    console.log(this.practice.value);
  }

  // invalidProjectName(control : FormControl) : {[s : string] : boolean}{
  //   if(this.invalidProject===control.value){
  //     return {'projectNameInvalid' : true};
  //   }
  //   return null;
  // }

  invalidProjectName(control : FormControl) : Promise<any> | Observable<any>{
      const promise = new Promise<any> ((resolve, reject)=>{
        setTimeout(()=>{
          if(control.value === 'Test'){
            resolve({'projectNameInvalid' : true});
          } else {
            resolve(null);
          }
        },1000);
      });
      return promise;
  }
}
