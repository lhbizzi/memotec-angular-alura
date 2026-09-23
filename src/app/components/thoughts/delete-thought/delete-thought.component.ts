import { Component, OnInit } from '@angular/core';
import { Thought } from '../thought';
import { ThoughtService } from '../thought.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-delete-thought',
  templateUrl: './delete-thought.component.html',
  styleUrls: ['./delete-thought.component.css'],
})
export class DeleteThoughtComponent implements OnInit {
  thought!: Thought;

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

  deleteThought() {
    this.service.delete(this.thought.id!).subscribe(() => {
      this.router.navigate(['/list-thought']);
    });
  }

  cancelDelete() {
    this.router.navigate(['/list-thought']);
  }
}
