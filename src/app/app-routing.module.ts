import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './pages/main/main.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'main',
  },
  {
    path: 'main',
    component: MainComponent,
  },
  {
    path: 'operators',
    loadChildren: () => import('./pages/operators/operators.module').then((m) => m.OperatorsModule),
  },
  { path: 'subjects', loadChildren: () => import('./pages/subjects/subjects.module').then((m) => m.SubjectsModule) },
  { path: 'recipes', loadChildren: () => import('./pages/recipes/recipes.module').then((m) => m.RecipesModule) },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
