import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'quizz', loadChildren: './page/quizz/quizz.module#QuizzPageModule' },
  { path: 'quizz1', loadChildren: './page/quizz1/quizz1.module#Quizz1PageModule' },
  { path: 'quizz2', loadChildren: './page/quizz2/quizz2.module#Quizz2PageModule' },
  { path: 'quizz3', loadChildren: './page/quizz3/quizz3.module#Quizz3PageModule' },
  { path: 'results', loadChildren: './page/results/results.module#ResultsPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
