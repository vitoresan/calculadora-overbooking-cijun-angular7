import { Component, OnInit } from '@angular/core';
import { IdadePI } from '../modelos/idadePI'
import { IdadePiService } from '../idade-pi.service'

@Component({
  selector: 'app-idade-pi',
  templateUrl: './idade-pi.component.html',
  styleUrls: ['./idade-pi.component.css']
})

export class IdadePIComponent implements OnInit {
  idades: IdadePI[];
  idadePI = new IdadePI();

  constructor(
    private idadePiService: IdadePiService
  ) { }

  ngOnInit() {
    this.obterListaIdades();
  }

  obterListaIdades(): void {
    this.idadePiService.obterIdadesPI()
      .subscribe(idades => this.idades = idades)
  }

  add(idade: IdadePI): void {
    if (!idade || !idade.idadePassageiro || !idade.piDeComparecimento)
      return;

      this.idadePiService.addIdadePI(idade)
      .subscribe(idade => {
        this.idades.push(idade);
      });

      this.idadePI = new IdadePI();
  }

  deletar(idade: IdadePI): void {
    this.idades = this.idades.filter(h => h !== idade);
    this.idadePiService.deletarIdadePI(idade).subscribe();
  }
}
