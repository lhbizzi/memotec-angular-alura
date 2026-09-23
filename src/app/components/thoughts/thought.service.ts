import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Thought } from './thought';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ThoughtService {
  private readonly API = 'http://localhost:3000/thoughts';
  constructor(private http: HttpClient) {}

  create(thought: Thought): Observable<Thought> {
    return this.http.post<Thought>(this.API, thought);
  }

  read(): Observable<Thought[]> {
    return this.http.get<Thought[]>(this.API);
  }

  searchById(id: number): Observable<Thought> {
    return this.http.get<Thought>(this.API + '/' + id);
  }

  update(id: number): Observable<Thought> {
    const thought = this.searchById(id);
    return this.http.put<Thought>(this.API, thought);
  }

  delete(id: number): Observable<Thought> {
    return this.http.delete<Thought>(this.API + '/' + id);
  }
}
