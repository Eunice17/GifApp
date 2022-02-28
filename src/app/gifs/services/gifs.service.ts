import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  private _historial: string[] = [];

  constructor() { }

  get historial() {
    return [... this._historial];
  }
  setHistorial(query: string) {
    this._historial.unshift(query);
    console.log("His",this._historial);
  }
}
