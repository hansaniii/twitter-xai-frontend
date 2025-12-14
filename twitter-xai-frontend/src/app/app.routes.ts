import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './pages/login/login';
import { DashboardComponent } from './pages/dashboard/dashboard';
import { Tweets } from './pages/tweets/tweets';
import { Explainability } from './pages/explainability/explainability';
import { Awareness } from './pages/awareness/awareness';

export const routes: Routes = [
 { path: '', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'tweets', component: Tweets },
  { path: 'explainability', component: Explainability },
  { path: 'awareness', component: Awareness }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
