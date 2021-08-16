import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.css']
})
export class EventBindingComponent implements OnInit {

  // Atributos
  valorAtual: string = '';
  valorSalvo: string;
  isMouseOver: boolean = false;

  // Métodos
  botaoClicado() {  
    alert("Botão clicado!");
  }

  onKeyUp(evento: KeyboardEvent) {
    this.valorAtual = (<HTMLInputElement>evento.target).value;
  }
 
  salvarValor(valor) {
    this.valorSalvo = valor;
  }

  onMouseOverOut() {
    this.isMouseOver = !this.isMouseOver;
  }
  
  constructor() { }

  ngOnInit() {
  }

}
