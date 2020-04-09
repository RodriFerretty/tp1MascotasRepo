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
  mascotas: Mascota[] = [];

  addMascotaToListComponent(newMascota: Mascota){
    console.log("This is the new mascota: ", newMascota)
    console.log("This is mascotaSSS: ", this.mascotas)
    
    this.mascotas.push(newMascota)
  }

  showDetailOf(selectedMascota: Mascota){
    this.mascota = selectedMascota
  }
}
