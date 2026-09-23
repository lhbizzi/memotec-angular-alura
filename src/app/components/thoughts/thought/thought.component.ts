import { Component, Input, OnInit } from '@angular/core';
import { Thought } from '../thought';
import { Router } from '@angular/router';

@Component({
  selector: 'app-thought',
  templateUrl: './thought.component.html',
  styleUrls: ['./thought.component.css'],
})
export class ThoughtComponent implements OnInit {
  @Input() thought!: Thought;

  constructor(private router: Router) {}

  ngOnInit(): void {}

  thoughtWidth(): string {
    if (this.thought.conteudo.length >= 256) {
      return 'pensamento-g';
    }
    return 'pensamento-p';
  }

  deleteThought() {
    this.router.navigate([`/thoughts/delete-thought/${this.thought.id}`]);
  }

  updateThought() {
    this.router.navigate([`/thoughts/update-thought/${this.thought.id}`]);
  }
}
