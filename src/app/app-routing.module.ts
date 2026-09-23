import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateThoughtComponent } from './components/thoughts/create-thought/create-thought.component';
import { ListThoughtComponent } from './components/thoughts/list-thought/list-thought.component';
import { DeleteThoughtComponent } from './components/thoughts/delete-thought/delete-thought.component';
import { UpdateThoughtComponent } from './components/thoughts/update-thought/update-thought.component';

const routes: Routes = [
  { path: '', redirectTo: 'list-thought', pathMatch: 'full' },
  { path: 'create-thought', component: CreateThoughtComponent },
  { path: 'list-thought', component: ListThoughtComponent },
  { path: 'thoughts/delete-thought/:id', component: DeleteThoughtComponent },
  {
    path: 'thoughts/update-thought/:id',
    component: UpdateThoughtComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
