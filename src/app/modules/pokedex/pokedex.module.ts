import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './pages/list/list.component';
import { AddComponent } from './pages/add/add.component';
import { FindComponent } from './pages/find/find.component';
import { PokedexComponent } from './pages/pokedex/pokedex.component';
import { PokemonComponent } from './pages/pokemon/pokemon.component';
import { EditComponent } from './pages/edit/edit.component';
import { PokedexRoutingModule } from './pokedex-routing.module';



@NgModule({
  declarations: [
    ListComponent,
    AddComponent,
    FindComponent,
    PokedexComponent,
    PokemonComponent,
    EditComponent
  ],
  imports: [
    CommonModule,
    PokedexRoutingModule
  ]
})
export class PokedexModule { }
