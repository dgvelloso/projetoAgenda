import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Tarefa } from '../models/tarefa.model';
import { TarefasService } from '../services/tarefas.service';

@Component({
  selector: 'app-cadastro-tarefas',
  templateUrl: './cadastro-tarefas.component.html',
  styleUrls: ['./cadastro-tarefas.component.css']
})
export class CadastroTarefasComponent implements OnInit {

  //atributo delcarado = nome (mensagem), tipo (string) e valor (vazio)
  mensagem: string  = "";

  //utilizando o método construtor do componente pra
  // inicialiar a classe tarefas.service (injeção de dependência)

  constructor(
    private tarefasService: TarefasService // inicialização
  ) { }

  ngOnInit(): void {
  }

  // declarando o conteúdo do formulário
  formCadastro = new FormGroup({
    // declarando os campos do formulário
    nome: new FormControl('', [Validators.required, Validators.minLength(6)]),
    data: new FormControl('', [Validators.required]),
    hora: new FormControl('', [Validators.required]),
    descricao: new FormControl('', [Validators.required, Validators.minLength(10)]),
    prioridade: new FormControl('', [Validators.required]),
  });

  //função pra exibir na página as mensagens de validação de cada campo
  //permitindo acessar as propriedades de cada campo do formulário

  get form(): any {
    return this.formCadastro.controls;
  }
  //any = qualquer json da pg

  //função pra processar o submit do formulário
  onSubmit() : void {

    //capturar os dados do formulario e armazenar na model
    const tarefa: Tarefa = {
      idTarefa: this.tarefasService.gerarId(),
      nome: this.formCadastro.value.nome,
      data: this.formCadastro.value.data,
      hora: this.formCadastro.value.hora,
      descricao: this.formCadastro.value.descricao,
      prioridade: this.formCadastro.value.prioridade
    };

    //cadastrar a tarefa
    this.tarefasService.cadastrar(tarefa);


    //.value traz tudo que foi escrito no formulário
    //imprimindo no console do navegador
   //console.log(this.formCadastro.value);

    //exibir mensagem na página
    this.mensagem = " Tarefa cadastrada com sucesso.";

    //limpar os campos do formulário
    this.formCadastro.reset();
  }

  //função pra limpar mensagem
  clear(): void{
    this.mensagem ="";
  }
}
