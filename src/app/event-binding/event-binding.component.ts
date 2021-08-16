import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.css']
})

export class EventBindingComponent implements OnInit {

  // Atributos
  valorAtual: string = "";
  valorSalvo: string;
  isMouseOver: boolean = false;
  name: string = "abc";
  pessoa = {nome: "", idade: ""};
  nomeDoCurso: string = "Angular";


  // Métodos
  botaoClicado() {
    alert("Botão clicado!");
  }

  onKeyUp(evento: KeyboardEvent) {
    this.valorAtual = (<HTMLInputElement>evento.target).value;
  }

  salvarValor(valor: string) {
    this.valorSalvo = valor;
  }

  onMouseOverOut() {
    this.isMouseOver = !this.isMouseOver;
  }

  constructor() { }

  ngOnInit() {
  }

}
