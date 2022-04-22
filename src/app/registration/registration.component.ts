import { Component, OnInit, TemplateRef, ViewChild, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class RegistrationComponent implements OnInit {
  myForm!: FormGroup;
  templateName="student";
  constructor(private formBuild: FormBuilder) { }

  ngOnInit(): void {
    this.myForm = this.formBuild.group({
      name: ['', Validators.required],
      adid: ['', [Validators.required, Validators.pattern("^[0-9]*$")]],
      email: ['', [Validators.required, Validators.email]],
      password: ['',Validators.required]
    })
  }

  onSubmit(): void{
    console.warn("workgin");
  }
}
