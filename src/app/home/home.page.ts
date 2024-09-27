import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonTextarea, IonLabel, IonItem } from '@ionic/angular/standalone';
import { SmsService } from '../shared/services/sms.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonTextarea, FormsModule, IonLabel, IonItem],
})
export class HomePage {

    phoneNumbers: string[] = ['+1234567890', '+0987654321'];
    message: string = "¡Hola! Este es un mensaje de prueba desde la app sms.";    

    constructor(
    private smsService: SmsService,
  ) {}

  public sendGroupSMS() {
    this.smsService.sendSMS(this.phoneNumbers, this.message);
  }


}
