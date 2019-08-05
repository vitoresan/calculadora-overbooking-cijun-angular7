import { InMemoryDbService } from 'angular-in-memory-web-api';
import { IdadePI } from '../app/modelos/idadePI';
import { Injectable } from '@angular/core';
import { async } from 'q';

@Injectable({
  providedIn: 'root',
})

export class InMemoryDataService implements InMemoryDbService {
  async createDb()  {

    const idades = [];
    const dias = [];
    const rotas = [];
    const viagens = [];

//Comentar caso não seja necessário
    //return this.GerarDadosFake();

    return { idades, dias, rotas, viagens };
  }

  GerarDadosFake(){
    const idades =
      [
        {
          id: 1,
          idadePassageiro: 5,
          piDeComparecimento: 25,
          label: "5 anos."
        },
        {
          id: 2,
          idadePassageiro: 10,
          piDeComparecimento: 67,
          label: "10 anos."
        },
        {
          id: 3,
          idadePassageiro: 20,
          piDeComparecimento: 95,
          label: "20 anos."
        },
        {
          id: 4,
          idadePassageiro: 25,
          piDeComparecimento: 97,
          label: "25 anos."
        },
        {
          id: 5,
          idadePassageiro: 30,
          piDeComparecimento: 90,
          label: "30 anos."
        },
        {
          id: 6,
          idadePassageiro: 35,
          piDeComparecimento: 95,
          label: "35 anos."
        },
        {
          id: 7,
          idadePassageiro: 40,
          piDeComparecimento: 93,
          label: "40 anos."
        },
        {
          id: 8,
          idadePassageiro: 45,
          piDeComparecimento: 80,
          label: "45 anos."
        },
        {
          id: 9,
          idadePassageiro: 75,
          piDeComparecimento: 50,
          label: "75 anos."
        }
      ];

    const dias = [
      { id: 1, dia: "Segunda-Feira", piDeComparecimento: 85 },
      { id: 2, dia: "Terça-Feira", piDeComparecimento: 80 },
      { id: 3, dia: "Quarta-Feira", piDeComparecimento: 90 },
      { id: 4, dia: "Quinta-Feira", piDeComparecimento: 95 },
      { id: 5, dia: "Sexta-Feira", piDeComparecimento: 98 },
      { id: 6, dia: "Sábado", piDeComparecimento: 97 },
      { id: 7, dia: "Domingo", piDeComparecimento: 95 },
    ];

    const rotas = [
      { id: 1, aeroportoOrigem: "GRU", aeroportoDestino: "MCZ", piDeComparecimento: 98 },
      { id: 2, aeroportoOrigem: "VCP", aeroportoDestino: "CGH", piDeComparecimento: 25 }
    ];

    const viagens = [];

    var randomIdades = [5, 10, 20, 25, 30, 35, 40, 45, 75,5, 10, 20, 25, 30, 35, 40, 45, 75,95, 10, 20, 25, 30, 35, 40, 45, 75,5, 10, 20, 25, 30, 35, 40, 45, 755, 10, 20, 25, 30, 35, 40, 45, 75]

    for (let index = 1; index < 220; index++) {
      viagens.push({
        id: index,
        data: new Date(2019, 12, 15),
        descrIdade: `${randomIdades[Math.floor(Math.random() * randomIdades.length)]} anos.`,
        descrRota: "De: NWZ - Para: GHZ",
        nomePassageiro: `Teste ${index}`
      })
    }

    for (let index = 1; index < 220; index++) {
      viagens.push({
        id: index,
        data: new Date(2019, 12, 25),
        descrIdade: `${randomIdades[Math.floor(Math.random() * randomIdades.length)]} anos.`,
        descrRota: "De: VCP - Para: CGH",
        nomePassageiro: `Teste2 ${index}`
      })
    }

    return { idades, dias, rotas, viagens };

  }

  genId(idades: IdadePI[]): number {
    return idades.length > 0 ? Math.max(...idades.map(idade => idade.id)) + 1 : 1;
  }

}
