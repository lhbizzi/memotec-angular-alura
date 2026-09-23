import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-thought',
  templateUrl: './create-thought.component.html',
  styleUrls: ['./create-thought.component.css'],
})
export class CreateThoughtComponent implements OnInit {
  thought = {
    id: '1',
    conteudo: 'Aprendendo Angular',
    autoria: 'Dev',
    modelo: 'modelo1',
  };

  constructor() {}

  criarPensamento(event: Event): void {
    event.preventDefault();
    alert('Pensamento criado!');
  }

  cancelarPensamento(event: Event): void {
    event.preventDefault();
    alert('Pensamento cancelado!');
  }

  ngOnInit(): void {}
}
