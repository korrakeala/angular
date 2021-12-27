import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  constructor( private primeNGConfig: PrimeNGConfig ) { }

  ngOnInit() {
    this.primeNGConfig.ripple = true;
  }

  nombre: string = 'reNatA maNsiLla';
  valor: number = 10000;
  obj = {
    nombre: 'Renata',
    apellido: 'Mansilla'
  }

  mostrarNombre() {
    console.log(this.nombre);
    console.log(this.valor);
    console.log(this.obj);
  }
}