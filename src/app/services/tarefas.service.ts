import { Injectable } from '@angular/core';
import { Tarefa } from '../models/tarefa.model';

@Injectable({
  providedIn: 'root'
})
export class TarefasService {
 
  //criando uma lista de tarefas
  tarefas: Tarefa[]= [
    { 
      idTarefa: 1,
      nome: 'aula de Angular',
      data: '02-10',
      hora:'13:30',
      descricao:'aula de desenvolvimento front end',
      prioridade: "3",
    },

    { 
      idTarefa: 2,
      nome: 'aula de Angular2',
      data: '02-10',
      hora:'15:30',
      descricao:'aula de desenvolvimento web MVP',
      prioridade: "2",
    },
    
    { 
      idTarefa: 3,
      nome: 'aula de Angular3',
      data: '02-10',
      hora:'16:30',
      descricao:'aula de desenvolvimento APIs',
      prioridade: "1",
    },
    
    { 
      idTarefa: 4,
      nome: 'aula de Angular4',
      data: '02-10',
      hora:'16:30',
      descricao:'aula de desenvolvimento JAVA',
      prioridade: "1",
    },

    { 
      idTarefa: 5,
      nome: 'aula de Angular4',
      data: '02-10',
      hora:'16:30',
      descricao:'aula de desenvolvimento JAVA',
      prioridade: "1",
    }
  ];

  constructor() { }

  //função pra gerar um id pra tarefa
    gerarId(): number{
      let id = 0;
      this.tarefas.forEach(function(item){
        if(id < item.idTarefa)
        id= item.idTarefa;
      });

      return id +1; //incremento
    }


  //função para cadastrar uma tarefa
  cadastrar(tarefa: Tarefa): void{
    //adicionando a tarefa na lista = push
    this.tarefas.push(tarefa);
  }

  //função pra excluir tarefa
  excluir(tarefa: Tarefa) : void{
    //remover a tarefa da listagem
    this.tarefas.splice(this.tarefas.indexOf(tarefa), 1);
  }

  //função pra atualizar uma tarefa
  atualizar(tarefa: Tarefa): void {
    //procurar a posição na lista onde está a tarefa
    const position = this.tarefas.findIndex
    (t => t.idTarefa === tarefa.idTarefa);
    //atualizando o registro da tarefa dentro da lista
  this.tarefas[position] = tarefa;

  }
  //o id tem que ser igual tanto no titulo quanto numérico. o find index retorna a posição dento do json array 
  // t é qualquer nome pra tarefa
  //o findindex procura o registro da tarefa
  //primeiro procura o registro pra depois jogar por cima do existente


  //buscar 1 tarefa dentro da lista atraves do id
  obterPorId(id: number) : Tarefa {
    //procurar a posição na lista onde está a tarefa
    const position = this.tarefas.findIndex(t => t.idTarefa === id);
    //retornando o registro pela posição
    return this.tarefas[position];
  }
  
  //função pra retornar as tarefas cadastradas
  consultar(): Tarefa[]{
    return this.tarefas;
  }

  
}
