import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})

export class DataBindingComponent implements OnInit {

  imageUrl: string = 'http://lorempixel.com/400/200/nature/'
  url: string = 'http://loiane.com';
  cursoAngular: boolean = true;

  getValor() {
    return 3;
  }

  getCurtirCurso() {
    return true;
  }

  constructor() { }

  ngOnInit() {
  }

}
