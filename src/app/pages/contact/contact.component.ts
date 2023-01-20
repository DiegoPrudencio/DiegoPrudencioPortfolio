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

  constructor(private formBuilder: FormBuilder, private contactService: ContactService
    ) {

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
    })

    alert("Your message was send! Thank you.");

    this.contactService.sendEmail(contact).subscribe(res => {
      if (res.ok) {
        this.contactForm.reset();
      } else {
        console.error(res);
      }
    });

  }

}
