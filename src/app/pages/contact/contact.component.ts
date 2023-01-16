import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  formulario: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.formulario = this.formBuilder.group({
      name: ['', [Validators.required]],
      phoneNumber: ['', [Validators.required, Validators.minLength(11)]],
      email: ['', [Validators.required]],
      subject: ['', [Validators.required]],
      message: ['', [Validators.required]]
    });
  }

  ngOnInit(): void {
  }

  send() {
    console.log(this.formulario.get('name')?.value);
    console.log(this.formulario.get('phoneNumber')?.value);
    console.log(this.formulario.get('email')?.value);
    console.log(this.formulario.get('subject')?.value);
    console.log(this.formulario.get('message')?.value);


  }

  // clearInput() {
  //   // this.userID = "";
  //   // this.userPassword = "";
  // }

}
