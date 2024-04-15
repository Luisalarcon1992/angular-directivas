import { Component, computed, signal } from '@angular/core';

@Component({
  selector: 'signals-counter-page',
  templateUrl: './counter-page.component.html',
  styleUrl: './counter-page.component.css'
})
export class CounterPageComponent {

  /* Las signals son una forma de manejar el estado de la aplicación de forma reactiva. Es decir, cuando una signal cambia, todos los componentes que la estén observando serán notificados de ese cambio.
  A diferencia de las variables normales, las signals pueden ser observadas por otros componentes.
  En este caso, la signal counter es un número que se inicializa en 10.

  Las signals son almacenadas en el servicio SignalService, que se encarga de notificar a los componentes que están observando una signal cuando esta cambia.
  */


  public counter = signal<number>(10)
  public squareCounter = computed(() => this.counter() * this.counter())

  increaseBy( value: number ) {
    this.counter.update( current => current + value )
  }
}
