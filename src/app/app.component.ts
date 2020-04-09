import { Component } from '@angular/core';
import { Mascota } from './classes/mascota';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tp1Mascota';

  mascota: Mascota

  addMascotaToListComponent(newMascota: Mascota){
    console.log("This is the new mascota: ", newMascota)
    this.mascota = newMascota
  }
}
