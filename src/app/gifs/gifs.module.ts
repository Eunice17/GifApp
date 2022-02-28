import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GifsPagesComponent } from './gifs-pages/gifs-pages.component';
import { BusquedaComponent } from './busqueda/busqueda.component';
import { ResultadosComponent } from './resultados/resultados.component';



@NgModule({
  declarations: [
    GifsPagesComponent,
    BusquedaComponent,
    ResultadosComponent
  ],
  exports: [ GifsPagesComponent ],
  imports: [
    CommonModule
  ]
})
export class GifsModule { }
