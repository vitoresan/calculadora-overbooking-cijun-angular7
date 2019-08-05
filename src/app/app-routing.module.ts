import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IdadePIComponent } from './idade-pi/idade-pi.component';
import { DiaSemanaPIComponent } from './dia-semana-pi/dia-semana-pi.component'
import  { RotaPIComponent} from './rota-pi/rota-pi.component'
import  { ViagemComponent } from './viagem/viagem.component'
import  { OverbookingComponent } from './overbooking/overbooking.component'

const routes: Routes = [
  { path: 'idade-pi', component: IdadePIComponent },
  { path: 'dia-semana-pi', component: DiaSemanaPIComponent },
  { path: 'rota-pi', component: RotaPIComponent },
  { path: 'viagem', component: ViagemComponent },
  { path: 'overbooking', component: OverbookingComponent },
  { path: '', component: OverbookingComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
