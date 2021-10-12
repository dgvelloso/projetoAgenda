import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import {TarefasService} from '../services/tarefas.service';
import { Tarefa } from '../models/tarefa.model';


//primeiro declara o formulário no ts, depois faz uma função get pra retornar
//os campos e depois submit pra atualizar a tarefa.
//por enquanto é no console pra nível de aprendizado.

@Component({
  selector: 'app-edicao-tarefas',
  templateUrl: './edicao-tarefas.component.html',
  styleUrls: ['./edicao-tarefas.component.css']
})

export class EdicaoTarefasComponent implements OnInit {

      //atributo
  mensagem: string = "";

  constructor(
    private activatedRoute: ActivatedRoute, //inicialização automática - injeção de dependência
    private tarefasService: TarefasService, 
  ) { }

  //função executada quando o componente é carregado
  ngOnInit(): void {
    //capturando o id da tarefa enviado na url (rota)
    const idTarefa = this.activatedRoute.snapshot.paramMap.get('id') as string;

    //capturar os dados da tarefa através do id
    const tarefa = this.tarefasService.obterPorId(parseInt(idTarefa));

    //preenchendo o formulário com os dados da tarefa
    this.formEdicao.controls.idTarefa.setValue(tarefa.idTarefa);
    this.formEdicao.controls.nome.setValue(tarefa.nome);
    this.formEdicao.controls.data.setValue(tarefa.data);
    this.formEdicao.controls.hora.setValue(tarefa.hora);
    this.formEdicao.controls.descricao.setValue(tarefa.descricao);
    this.formEdicao.controls.prioridade.setValue(tarefa.prioridade);

  }

  // declarando o conteúdo do formulário
  formEdicao = new FormGroup({
    // declarando os campos do formulário
    idTarefa: new FormControl('', []), //campo oculto
    nome: new FormControl('', [Validators.required, Validators.minLength(6)]),
    data: new FormControl('', [Validators.required]),
    hora: new FormControl('', [Validators.required]),
    descricao: new FormControl('', [Validators.required, Validators.minLength(10)]),
    prioridade: new FormControl('', [Validators.required]),
  });

  //função pra exibir na página as mensagens de validação de cada campo
  //permitindo acessar as propriedades de cada campo do formulário

  get form(): any {
    return this.formEdicao.controls;
  }

  //função para capturar o submit do formulário
  //o nome da função pode ser qualquer uma
  onSubmit(): void {
    var tarefa: Tarefa = {
      idTarefa: this.formEdicao.value.idTarefa,
      nome: this.formEdicao.value.nome,
      data: this.formEdicao.value.data,
      hora: this.formEdicao.value.hora,
      descricao: this.formEdicao.value.descricao,
      prioridade: this.formEdicao.value.prioridade
    };

    //atualizar os dados da tarefa
    this.tarefasService.atualizar(tarefa);

    //exibindo mensagem..
    this.mensagem = "Tarefa atualizada com sucesso.";
  }




    //função para limpar a mensagem
    clear(): void {
      this.mensagem = "";
    }
  


}
