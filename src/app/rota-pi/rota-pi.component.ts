import { Component, OnInit } from '@angular/core';
import { RotaPI } from '../modelos/rotaPI'
import { RotaPIService } from '../rota-pi.service';

@Component({
  selector: 'app-rota-pi',
  templateUrl: './rota-pi.component.html',
  styleUrls: ['./rota-pi.component.css']
})
export class RotaPIComponent implements OnInit {
  constructor(
    private rotaPIService: RotaPIService
  ) { }

  rotas: RotaPI[];
  rotaPI = new RotaPI();

  ngOnInit() {
    this.obterListaRotas()
  }

  obterListaRotas() {
    this.rotaPIService.obterRotasPI()
      .subscribe(rotas => this.rotas = rotas)
  }

  add(rotaPI: RotaPI): void {
    if (!rotaPI || !rotaPI.aeroportoOrigem || !rotaPI.aeroportoDestino || !rotaPI.piDeComparecimento)
      return;

    this.rotaPIService.addRotaPI(rotaPI)
      .subscribe(rota => {
        this.rotas.push(rota);
      });

    this.rotaPI = new RotaPI();
  }

  deletar(rotaPI: RotaPI): void {
    this.rotas = this.rotas.filter(h => h !== rotaPI);
    this.rotaPIService.deletarRotaPI(rotaPI).subscribe();
  }
}
