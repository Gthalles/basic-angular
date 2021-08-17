import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'contador',
  templateUrl: './output-property.component.html',
  styleUrls: ['./output-property.component.css']
})

export class OutputPropertyComponent implements OnInit {
  // Atributos
  @Input() valor: number;
  @Output() mudouValor = new EventEmitter();
  @ViewChild('campoInput') campoValorInput!: ElementRef;

  // Métodos
  incrementa() {  
    console.log(this.campoValorInput);  
    this.campoValorInput.nativeElement.value++;
    this.mudouValor.emit({novoValor: this.valor});
  }

  decrementa() {
    console.log(this.campoValorInput);
    this.campoValorInput.nativeElement.value++;
    this.mudouValor.emit({novoValor: this.valor});
  }

  constructor() { }

  ngOnInit() {
  }

}
