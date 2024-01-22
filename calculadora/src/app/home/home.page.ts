import { Component, ElementRef, Renderer2 } from '@angular/core';
import { SelectChangeEventDetail } from '@ionic/angular';
import { IonSelectCustomEvent } from '@ionic/core';

interface IonButtonElement extends HTMLElement {
  expand: string;
  strong: string;
  fill: string;
  size: string;
}

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage {

  result:string = '0';
  botonSeleccionar:string = "";
  tamanoSeleccionar:string = "";
  constructor(private el: ElementRef, private renderer: Renderer2) {}

  onChangeButton(event: { detail: { value: string; }; }) {
    // event.detail.value contiene el valor seleccionado
    this.botonSeleccionar = event.detail.value;
    console.log("El boton seleccionado es:", this.botonSeleccionar)
  }

  onChangeSize(event: { detail: { value: string; }; }) {
    // event.detail.value contains the selected value
    this.tamanoSeleccionar = event.detail.value;
    console.log("El tamaño seleccionado es:", this.tamanoSeleccionar);
  
    const boton = this.el.nativeElement.querySelector('#boton');
    this.renderer.setAttribute(boton, "color", "dark");
  }

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
   
  /* onLoad(): void { 
    document.addEventListener("ionChange", this.setStyle);
    this.setStyle();
  }

  setStyle(): void { 
    /*document.querySelectorAll<HTMLIonButtonElement>("ion-content ion-button").forEach(function(b) {
        b.expand = "block";
        b.strong = true;
        b.fill = document.getElementById("type")?.value;
        b.size = document.getElementById("size")?.value;
    });*/
   /*} */

}

