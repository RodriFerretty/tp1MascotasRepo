import { Component, OnInit, Input } from '@angular/core';
import { Mascota } from 'src/app/classes/mascota';

@Component({
  selector: 'app-detalle-mascota',
  templateUrl: './detalle-mascota.component.html',
  styleUrls: ['./detalle-mascota.component.css']
})
export class DetalleMascotaComponent implements OnInit {
  @Input() mascotaSelected: Mascota

  mascota: Mascota
  constructor() { }

  ngOnInit(): void {
    this.mascota = this.mascotaSelected
  }

}
