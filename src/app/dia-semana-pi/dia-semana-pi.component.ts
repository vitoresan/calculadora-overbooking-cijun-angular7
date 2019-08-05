import { Component, OnInit } from '@angular/core';
import { DiaSemanaPI } from '../modelos/diaSemanaPI';
import { DiaSemanaPIService } from '../dia-semana-pi.service';

@Component({
  selector: 'app-dia-semana-pi',
  templateUrl: './dia-semana-pi.component.html',
  styleUrls: ['./dia-semana-pi.component.css']
})
export class DiaSemanaPIComponent implements OnInit {
  constructor(
    private diaSemanaPIService: DiaSemanaPIService
  ) { }

  dias: DiaSemanaPI[]
  diaSemanaPI = new DiaSemanaPI()
  diasDaSemanaSelect: string[] = [
    "Domingo",
    "Segunda-Feira",
    "Terça-Feira",
    "Quarta-Feira",
    "Quinta-Feira",
    "Sexta-Feira",
    "Sábado"
  ]

  ngOnInit() {
    this.obterListaDiasSemanaPI();
  }

  obterListaDiasSemanaPI() {
    this.diaSemanaPIService.obterDiasSemanaPI()
      .subscribe(dias => this.dias = dias)
  }

  add(diaSemanaPI: DiaSemanaPI): void {
    if (!diaSemanaPI || !diaSemanaPI.dia || !diaSemanaPI.piDeComparecimento)
      return;

      this.diaSemanaPIService.addDiaSemanaPI(diaSemanaPI)
      .subscribe(diaSemanaPI => {
        this.dias.push(diaSemanaPI);
      });

      this.diaSemanaPI = new DiaSemanaPI();
  }

  deletar(diaSemanaPI: DiaSemanaPI): void {
    this.dias = this.dias.filter(h => h !== diaSemanaPI);
    this.diaSemanaPIService.deletarDiaSemanaPI(diaSemanaPI).subscribe();
  }
}
