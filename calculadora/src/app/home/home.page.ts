import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/angular/standalone';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent],
})
export class HomePage {
  result:string = '0';
  constructor() {}

  setResult(value:string){
    this.result = value;
  }

  getResult():string {
    return this.result;
  }

  add(key:string):void {
    const resultado = this.getResult();
    if (resultado != '0' || isNaN(+key)) this.setResult(resultado + key);
    else this.setResult(key);
  }

  calc() {
    const resultAsString = this.getResult().toString();
    const result = eval(resultAsString);
    this.setResult(result);
  }

  del() {
    this.setResult('0');
  }
}
