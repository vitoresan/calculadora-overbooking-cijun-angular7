import { Component, OnInit } from '@angular/core';
import { ViagemService } from '../viagem.service';
import { Viagem } from '../modelos/viagem';
import { RotaPIService } from '../rota-pi.service';
import { IdadePiService } from '../idade-pi.service';
import { IdadePI } from '../modelos/idadePI';
import { RotaPI } from '../modelos/rotaPI';
import { CalculosService } from '../calculos.service';

@Component({
  selector: 'app-viagem',
  templateUrl: './viagem.component.html',
  styleUrls: ['./viagem.component.css']
})
export class ViagemComponent implements OnInit {

  constructor(
    private viagemService: ViagemService,
    private rotaPIService: RotaPIService,
    private idadePIService: IdadePiService,
    private calculoService: CalculosService
  ) { }

  viagens: Viagem[];
  idades: IdadePI[];
  rotas: RotaPI[];
  viagem = new Viagem();

  ngOnInit() {
    this.carregarSelects()
    this.obterListaViagens()
  }

  carregarSelects() {
    this.idadePIService.obterIdadesPI()
      .subscribe(idades => this.idades = this.criarLabelIdades(idades))

    this.rotaPIService.obterRotasPI()
      .subscribe(rotas => this.rotas = this.criarLabelRotas(rotas))
  }

  criarLabelRotas(rotas: RotaPI[]): RotaPI[] {
    rotas
      .map(
        rota => rota.label = `De: ${rota.aeroportoOrigem} Para: ${rota.aeroportoDestino}.`
      )

    return rotas;
  }

  criarLabelIdades(idades: IdadePI[]): IdadePI[] {
    idades
      .map(
        idade => idade.label = `${idade.idadePassageiro} Anos.`
      )

    return idades;
  }

  obterListaViagens() {
    this.viagemService.obterViagens()
      .subscribe(viagens => this.viagens = this.retornarRegistrosFormatados(viagens))
  }

  retornarRegistrosFormatados(viagens: Viagem[]): Viagem[] {
    viagens.map(viagem => {
      viagem.pIViagem = this.calculoService.CalcularPIdePassageiro(viagem)
    });

    return viagens;
  }

  add(viagem: Viagem): void {
    if (!viagem || !viagem.nomePassageiro || !viagem.data || !viagem.descrRota || !viagem.descrIdade)
      return;

    this.viagemService.addViagem(viagem)
      .subscribe(viagem => {
        this.viagens.push(viagem);
      });

    this.viagem = new Viagem();
  }

  deletar(viagem: Viagem): void {
    this.viagens = this.viagens.filter(h => h !== viagem);
    this.viagemService.deletarViagem(viagem).subscribe();
  }
}
