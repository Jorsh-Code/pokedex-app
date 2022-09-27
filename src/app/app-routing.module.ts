import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppModule } from './app.module';
import { NotFoundComponent } from './components/shared/not-found/not-found.component';
import { LoginComponent } from './modules/auth/pages/login/login.component';
import { AuthGuard } from './services/guards/auth.guard';

const routes: Routes = [
  {
    path: '404',
    component: NotFoundComponent
  },
  {
    path: 'auth',
    component: LoginComponent,
  },
  {
    path: 'authLazy',
    loadChildren: () => import('./modules/auth/auth.module').then(m => m.AuthModule),
  }, 
  {
    path: 'pokedex',
    loadChildren: () => import('./modules/pokedex/pokedex.module').then(m => m.PokedexModule),
    canLoad: [AuthGuard],
    canActivate: [AuthGuard],
  }, 
  {
    path: '',
    component: NotFoundComponent,
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo:'404'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
