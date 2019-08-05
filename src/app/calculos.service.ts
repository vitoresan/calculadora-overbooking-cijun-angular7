import { Injectable } from '@angular/core';
import { RotaPIService } from './rota-pi.service';
import { IdadePiService } from './idade-pi.service';
import { DiaSemanaPIService } from './dia-semana-pi.service';
import { Viagem } from './modelos/viagem';
import { IdadePI } from './modelos/idadePI';
import { RotaPI } from './modelos/rotaPI';
import { Overbooking } from './modelos/overbooking';
import { DiaSemanaPI } from './modelos/diaSemanaPI';

@Injectable({
  providedIn: 'root'
})

export class CalculosService {

  constructor(
    private rotaPIService: RotaPIService,
    private idadePIService: IdadePiService,
    private diaSemanaPIService: DiaSemanaPIService,
  ) {
    this.carregarListaParametros();
  }

  rotas: RotaPI[];
  idades: IdadePI[];
  diasSemana: DiaSemanaPI[];

  private diasDaSemanaSelect: string[] = [
    "Domingo",
    "Segunda-Feira",
    "Terça-Feira",
    "Quarta-Feira",
    "Quinta-Feira",
    "Sexta-Feira",
    "Sábado"
  ]

  carregarListaParametros() {
    this.rotaPIService.obterRotasPI()
      .subscribe(rotas => { this.rotas = rotas });

    this.idadePIService.obterIdadesPI()
      .subscribe(idades => this.idades = idades)

    this.diaSemanaPIService.obterDiasSemanaPI()
      .subscribe(diasSemanas => this.diasSemana = diasSemanas)
  }

  CalcularPIdePassageiro(viagem: Viagem): number {
    var porcentagemRota: number = this.retornarPorcentagemRota(viagem.descrRota);
    var porcentagemData: number = this.retornarPorcentagemData(viagem.data);
    var porcentagemIdade: number = this.retornarPorcentagemIdade(viagem.descrIdade);

    var valor = ((100 * porcentagemRota * porcentagemData * porcentagemIdade));

    return parseFloat(valor.toFixed(2));
  }

  CalcularRiscoDeOverbooking(ob: Overbooking): number {
    var valor = (ob.passageirosCadastrados / ob.assentosDisponiveis * (ob.mediaComparecimentoVoo))
    return parseFloat(valor.toFixed(2))
  }

  retornarPorcentagemIdade(descrIdade: string): number {
    if (!this.idades)
      return 0;

    var idadePI: IdadePI = this.idades.filter(idade => idade.label == descrIdade)[0]

    return !idadePI ? 0 : idadePI.piDeComparecimento / 100;
  }

  retornarPorcentagemData(data: Date): number {
    if (!this.diasSemana)
      return 0;

    var diaSemana: DiaSemanaPI = this.retornarDiaSemana(data)

    return !diaSemana ? 0 : diaSemana.piDeComparecimento / 100;
  }

  retornarPorcentagemRota(descrRota: string): number {

    if (!this.rotas)
      return 0;

    var rota: RotaPI = this.rotas.filter(rota => rota.label = descrRota)[0]

    return !rota ? 0 : rota.piDeComparecimento / 100;
  }

  retornarDiaSemana(data: Date): DiaSemanaPI {
    return this.diasSemana.filter(dia => dia.dia === this.diasDaSemanaSelect[new Date(data).getDay()])[0]
  }
}
