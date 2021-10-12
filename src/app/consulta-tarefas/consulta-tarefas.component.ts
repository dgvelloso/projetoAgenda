import { Component, OnInit } from '@angular/core';
import { Tarefa } from '../models/tarefa.model';
import { TarefasService } from '../services/tarefas.service';


@Component({
  selector: 'app-consulta-tarefas',
  templateUrl: './consulta-tarefas.component.html',
  styleUrls: ['./consulta-tarefas.component.css']
})
export class ConsultaTarefasComponent implements OnInit {

  //atributo
  listagem: Tarefa[]= [];
  //tarefa é pra capturar e exibir a tarefa que aparece na pg consulta-tarefas
  // essa tarefa é pra exibit no modal
  tarefa: Tarefa = {idTarefa: 0, nome: '', hora:'',data:'', descricao:'', prioridade:'',}
  //pro componente de paginação
  pagina = 1;

  constructor(
    private tarefasService: TarefasService //inicializando!
  ) { }

  ngOnInit(): void {
    //executar a consulta e obter as tarefas cadastradas
    this.listagem = this.tarefasService.consultar();
  }

  //função pra realizar a paginação dos componentes
  onPageChange(event: any): void{
    this.pagina= event;
  // pega essa informação da página e exibe
  }

  obterTarefa(id: number):void{
    // pega o id que passa na função e manda o service buscar essa id tarefa
    this.tarefa = this.tarefasService.obterPorId(id);
  }

  //função pra realizar a exclusão da tarefa
  excluirTarefa():void{
    this.tarefasService.excluir(this.tarefa); //excluindo
    this.ngOnInit(); //recarregar a consulta
  }

}
