import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { catchError, Observable, of, tap } from 'rxjs';
import { Contact } from 'src/app/interface/contactForm';



@Injectable({
  providedIn: 'root'
})
export class ContactService {

  //Formspree API
  private formUrl = 'https://formspree.io/f/xpzewpwv';
  private headers = new HttpHeaders({ 'content-type': 'application/json' })
  constructor(private httpClient: HttpClient) { }

  /**
  * Post method to send the form data to the email we set in formspree
  * @param contact form data to be process
  */
  sendEmail(contact: Contact): Observable<any> {
    return this.httpClient.post<any>(
      this.formUrl,
      {//Post body
        name: contact.name,
        phoneNumber: contact.phoneNumber,
        email: contact.email,
        subject: contact.subject,
        message: contact.message
      },
      {
        headers: this.headers
      }
    ).pipe(
      tap(_ => console.warn('sending message')),
      catchError(this.handleError<any>('sendEmail', []))
    );
  }


  /**
   * Requests error handler
   * @param operation Type of operation we are executing
   * @param result what exactly happen after the execution
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      //We can stream this log to an platform like CloudWatch
      console.error(error);

      //Let our app keep running
      return of(result as T);
    }
  }
}
