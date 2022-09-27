import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokemonResolver } from 'src/app/services/resolvers/pokemon.resolver';
import { AddComponent } from './pages/add/add.component';
import { EditComponent } from './pages/edit/edit.component';
import { FindComponent } from './pages/find/find.component';
import { ListComponent } from './pages/list/list.component';
import { PokedexComponent } from './pages/pokedex/pokedex.component';
import { PokemonComponent } from './pages/pokemon/pokemon.component';

const routes: Routes = [{
  path: '',
  children : [
    {
      path: 'add',
      component: AddComponent
    },
    {
      path: 'edit/:id',
      component: PokemonComponent
    },
    {
      path: 'find',
      component: FindComponent
    },
    {
      path: 'list',
      component: ListComponent
    },
    {
      path: 'pokemon/:id',
      component: PokemonComponent,
      resolve: {
        pokemon: PokemonResolver
      }
    },
    {
      path: '',
      component: PokedexComponent,
      pathMatch: 'full'
    },
    {
      path: '**',
      redirectTo: 'list'
    }
  ]
}];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PokedexRoutingModule { }
