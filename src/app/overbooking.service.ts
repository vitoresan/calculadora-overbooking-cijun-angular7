import { Injectable } from '@angular/core';
import { Overbooking } from './modelos/overbooking';
import { Viagem } from './modelos/viagem';
import { CalculosService } from './calculos.service';
import { DiaSemanaPI } from './modelos/diaSemanaPI';
import { DiaSemanaPIService } from './dia-semana-pi.service';

@Injectable({
  providedIn: 'root'
})

export class OverbookingService {
  constructor(
    private calculoService: CalculosService,
    private diaSemanaPIService: DiaSemanaPIService
  ) { }

  overbookings: Overbooking[]

  gerarDadosDeOverbookingPorVoo(viagens: Viagem[]): Overbooking[] {

    if (!viagens)
      return;


    viagens.map(viagem => {
      if (!this.overbookings)
        this.addRegistroOverbooking(viagem)
      if (this.overbookings.filter(ob => ob.data === viagem.data && ob.rotaVoo === viagem.descrRota).length > 0) {
        this.updadeRegistroOverbooking(viagem)
      }
      else {
        this.addRegistroOverbooking(viagem)
      }
    })

    if (this.overbookings)
      this.overbookings.map(ob => {
        ob.mediaComparecimentoVoo = ob.mediaComparecimentoVoo / ob.passageirosCadastrados
        ob.riscoOverbooking = this.calculoService.CalcularRiscoDeOverbooking(ob);
      })

    return this.overbookings;
  }

  updadeRegistroOverbooking(viagem: Viagem) {
    this.overbookings
      .map(
        ob => {
          if (ob.data === viagem.data && ob.rotaVoo === viagem.descrRota) {
            ob.passageirosCadastrados += 1;
            ob.mediaComparecimentoVoo += viagem.pIViagem
          }
        }
      )
  }

  addRegistroOverbooking(viagem: Viagem) {

    var registro: Overbooking
    var registros = [];

    registro = {
      data: viagem.data,
      rotaVoo: viagem.descrRota,
      diaSemana: this.calculoService.retornarDiaSemana(viagem.data),
      assentosDisponiveis: 200,
      passageirosCadastrados: 1,
      mediaComparecimentoVoo: viagem.pIViagem,
      riscoOverbooking: 0
    }

    if (this.overbookings) {
      this.overbookings.push(registro);
    }
    else {
      registros.push(registro)
      this.overbookings = registros;
    }
  }
}
