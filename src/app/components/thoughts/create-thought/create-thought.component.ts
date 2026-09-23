import { Component, OnInit } from '@angular/core';
import { Thought } from '../thought';
import { ThoughtService } from '../thought.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-thought',
  templateUrl: './create-thought.component.html',
  styleUrls: ['./create-thought.component.css'],
})
export class CreateThoughtComponent implements OnInit {
  thought: Thought = {
    conteudo: '',
    autoria: '',
    modelo: 'modelo1',
  };

  constructor(
    private service: ThoughtService,
    private router: Router,
  ) {}

  criarPensamento(event: Event): void {
    event.preventDefault();
    this.service.create(this.thought).subscribe(() => {
      this.router.navigate(['/list-thought']);
    });
  }

  cancelarPensamento(event: Event): void {
    event.preventDefault();
    this.router.navigate(['/list-thought']);
  }

  ngOnInit(): void {}
}
