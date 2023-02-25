import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { StartComponent } from './pages/start/start.component';
import { TheBestGameComponent } from './pages/the-best-game/the-best-game.component';

const routes: Routes = [
  { path: 'start', component: StartComponent },
  { path: 'tbg', component: TheBestGameComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'start' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
