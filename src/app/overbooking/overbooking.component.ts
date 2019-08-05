import { Component, OnInit } from '@angular/core';
import { OverbookingService } from '../overbooking.service';
import { Overbooking } from '../modelos/overbooking';
import { Viagem } from '../modelos/viagem';
import { ViagemService } from '../viagem.service';
import { CalculosService } from '../calculos.service';

@Component({
  selector: 'app-overbooking',
  templateUrl: './overbooking.component.html',
  styleUrls: ['./overbooking.component.css']
})
export class OverbookingComponent implements OnInit {

  constructor(
    private viagemService: ViagemService,
    private calculoService: CalculosService,
    private overbookingService: OverbookingService
  ) { }

  viagens: Viagem[]
  voos: Overbooking[];

  async ngOnInit() {
    this.carregarViagens();
  }

  carregarViagens() {
    this.viagemService.obterViagens()
      .subscribe(
        viagens => {
          this.viagens = this.retornarRegistrosFormatados(viagens)
          this.voos = this.overbookingService.gerarDadosDeOverbookingPorVoo(this.viagens)
        })
  }

  retornarRegistrosFormatados(viagens: Viagem[]): Viagem[] {
    viagens.map(viagem => {
      viagem.pIViagem = this.calculoService.CalcularPIdePassageiro(viagem)
    });
    return viagens;
  }
}
