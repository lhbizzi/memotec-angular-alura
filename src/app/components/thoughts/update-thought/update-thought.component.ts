import { Component, OnInit } from '@angular/core';
import { Thought } from '../thought';
import { ThoughtService } from '../thought.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-thought',
  templateUrl: './update-thought.component.html',
  styleUrls: ['./update-thought.component.css'],
})
export class UpdateThoughtComponent implements OnInit {
  thought: Thought = {
    id: 0,
    conteudo: '',
    autoria: '',
    modelo: 'modelo1',
  };
  constructor(
    private service: ThoughtService,
    private router: Router,
    private route: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.service.searchById(parseInt(id!)).subscribe((thought) => {
      this.thought = thought;
    });
  }

  editarPensamento(event: Event): void {
    event.preventDefault();
    this.service.update(this.thought).subscribe(() => {
      this.router.navigate(['/list-thought']);
    });
  }

  cancelarPensamento(event: Event): void {
    event.preventDefault();
    this.router.navigate(['/list-thought']);
  }
}
