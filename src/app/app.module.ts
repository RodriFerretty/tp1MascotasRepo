import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CargaMascotaComponent } from './components/carga-mascota/carga-mascota.component';
import { DetalleMascotaComponent } from './components/detalle-mascota/detalle-mascota.component';
import { ListadoMascotasComponent } from './components/listado-mascotas/listado-mascotas.component';

@NgModule({
  declarations: [
    AppComponent,
    CargaMascotaComponent,
    DetalleMascotaComponent,
    ListadoMascotasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
