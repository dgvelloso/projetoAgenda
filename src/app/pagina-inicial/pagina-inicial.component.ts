import { Component, OnInit } from '@angular/core';
import { Chart } from 'angular-highcharts';

@Component({
  selector: 'app-pagina-inicial',
  templateUrl: './pagina-inicial.component.html',
  styleUrls: ['./pagina-inicial.component.css']
})
export class PaginaInicialComponent implements OnInit {

  //atributo pra armazenar os dados do gráfico
  grafico: Chart = new Chart();

  constructor() { }

  //método executado antes do componente carregar
  ngOnInit(): void {
     var dados: any[] = [
       {name: 'Prioridade baixa', y:6, color:'#5cb85c'},
       {name: 'Prioridade média', y:4, color:'#F0AD4E'},
       { name : 'Prioridade alta', y: 8, color: '#D9534F' },
      ];
  
      //nomes pro eixo x do gráfico
      var nomes: any[]=[
        ['PRIORIDADE BAIXA'], ['PRIORIDADE MÉDIA'], ['PRIORIDADE ALTA']
      ]
  
      this.grafico = new Chart({
        chart: { type : 'pie' },
        title: { text: 'Quantidade de tarefas por prioridade' },
        xAxis: { categories : nomes },
        yAxis: { title: { text: 'Quantidade de tarefas por prioridade' } },
        legend : { enabled : false },
        credits : { enabled: false },
        //dados que vão compilar pra informação
        series: [ { data: dados, type: undefined as any } ]
      });
  
  }

}
