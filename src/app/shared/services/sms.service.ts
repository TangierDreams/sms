import { Injectable } from '@angular/core';
import { SMS } from '@awesome-cordova-plugins/sms/ngx';

@Injectable({
  providedIn: 'root'
})

export class SmsService {

  constructor(
    private sms: SMS
  ) { }


  public sendSMS(phoneNumbers: string[], message: string) {
    phoneNumbers.forEach(phoneNumber => {
      this.sms.send(phoneNumber, message)
        .then(() => {
          console.log('SMS enviado a:', phoneNumber);
        })
        .catch((error) => {
          console.error('Error enviando SMS a:', phoneNumber, error);
        });
    });
  }

}
