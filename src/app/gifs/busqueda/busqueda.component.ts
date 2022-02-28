import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.scss']
})
export class BusquedaComponent implements OnInit {

  @ViewChild('inputBuscar') inputBuscar!: ElementRef<HTMLInputElement>;

  constructor(private gifService: GifsService) { }

  ngOnInit(): void {  }

  buscar() {
    let value = this.inputBuscar?.nativeElement.value;
    this.gifService.setHistorial(value);
    this.inputBuscar!.nativeElement.value = '';
  }

}
