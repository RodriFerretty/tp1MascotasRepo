import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Mascota } from 'src/app/classes/mascota';

@Component({
  selector: 'app-carga-mascota',
  templateUrl: './carga-mascota.component.html',
  styleUrls: ['./carga-mascota.component.css']
})
export class CargaMascotaComponent implements OnInit {
  @Output() mascotaAdd = new EventEmitter<Mascota>();

  name: string
  photoUrl: string
  type: string
  types = ["Perro", "Gato", "Pez"]
  constructor() { }
  ngOnInit(): void {
    this.type = this.types[0]
  }

  addMascota(): void {
    let newMascota = new Mascota(this.name, this.photoUrl, this.type)
    console.log(newMascota)
    this.mascotaAdd.emit(newMascota)
  }
}
