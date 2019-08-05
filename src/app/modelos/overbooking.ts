import { DiaSemanaPI } from './diaSemanaPI';

export class Overbooking {
  data: Date;
  rotaVoo: string;
  diaSemana: DiaSemanaPI;
  assentosDisponiveis: number;
  passageirosCadastrados: number;
  mediaComparecimentoVoo: number
  riscoOverbooking: number
}
