import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.scss']
})
export class BusquedaComponent implements OnInit {

  @ViewChild('inputBuscar') inputBuscar!: ElementRef<HTMLInputElement>;

  constructor() { }

  ngOnInit(): void {  }

  buscar() {
    let value = this.inputBuscar?.nativeElement.value;
    console.log("captura",value);
    this.inputBuscar!.nativeElement.value = '';
  }

}
