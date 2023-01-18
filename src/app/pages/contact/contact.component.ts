import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';

import { Contact } from 'src/app/interface/contactForm';
import { ContactService } from 'src/app/service/contact/contact.service';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  contactForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {

    this.contactForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      phoneNumber: ['', [Validators.required, Validators.minLength(11)]],
      email: ['', [Validators.required]],
      subject: ['', [Validators.required]],
      message: ['', [Validators.required]]
    });
  }

  ngOnInit(): void {
  }
  
  onSubmit(): void {
    

    const contact: Contact = ({
      
      name: this.contactForm.get('name')?.value,
      phoneNumber: this.contactForm.get('phoneNumber')?.value,
      email: this.contactForm.get('email')?.value,
      subject: this.contactForm.get('subject')?.value,
      message: this.contactForm.get('message')?.value,

      // name: this.contactForm.get('name').value,
      // email: email,
      // message: this.contactForm.get('message').value
    })



    // this.contactService.sendEmail(contact).subscribe(res => {
    //   if (res.ok) {
    //     this.contactForm.reset();
    //   } else {
    //     console.error(res);
    //   }
    // });

    // const email = this.contactForm.get('email').value;
    // this.invalidEmail = this.regexp.test(email);
    //Get the email element to apply some style to it.
    // if(!this.invalidEmail){
    //   this.emailDecorator(this.invalidEmail);
    // }else{

    //   //Remove change border color
    //   this.emailDecorator(this.invalidEmail);

    // const contact: Contact = ({
    //   name: this.contactForm.get('name').value,
    //   email: email,
    //   message: this.contactForm.get('message').value
    // })
    //Service to handle the http POST request in the background
    // this.contactService.sendEmail(contact).subscribe( res =>{
    //   if(res.ok){
    //     this.contactForm.reset();
    //   }else{
    //     console.error(res);
    //   }
    // });
    // }

  }

}
