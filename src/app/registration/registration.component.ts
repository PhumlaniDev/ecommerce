import { Component } from '@angular/core';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent {

  title = "REGISTRATION PAGE"
  public name ='Email.value'
  public Surname='Surname.value'
  public Email='Email.value'
  public password='Email.value';
  public jasmine_warning="class1"
  Advice()
  {

    alert("Backend Process the following data")
    this.title="new one"
  }
  onSubmit(){
  console.log("advice");
  }


}
