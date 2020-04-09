import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Mascota } from 'src/app/classes/mascota';

@Component({
  selector: 'app-listado-mascotas',
  templateUrl: './listado-mascotas.component.html',
  styleUrls: ['./listado-mascotas.component.css']
})
export class ListadoMascotasComponent implements OnInit {
  @Input() mascotasList: [Mascota]
  @Output() mascotaShowDetail = new EventEmitter<Mascota>()

  // mascotas: [Mascota]

  constructor() { }

  ngOnInit(): void {
  }

  showPetDetail(mascotaSelected: Mascota){
    console.log("Mascota from in list component: ", mascotaSelected)
    this.mascotaShowDetail.emit(mascotaSelected)
  }

}
