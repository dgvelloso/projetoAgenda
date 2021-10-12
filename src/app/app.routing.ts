import { NgModule } from "@angular/core";
import{Routes , RouterModule} from '@angular/router';

//importando os components
import { PaginaInicialComponent } from "./pagina-inicial/pagina-inicial.component";
import { CadastroTarefasComponent } from "./cadastro-tarefas/cadastro-tarefas.component";
import { ConsultaTarefasComponent } from "./consulta-tarefas/consulta-tarefas.component";
import { EdicaoTarefasComponent } from "./edicao-tarefas/edicao-tarefas.component";

//mapeamento de rotas para cada componente
const routes : Routes = [
    { path : '', component: PaginaInicialComponent},
    { path : 'cadastro-tarefas', component: CadastroTarefasComponent},
    { path : 'consulta-tarefas', component: ConsultaTarefasComponent},
    //tem que passar o id da tarefa como parâmetro da url
    { path: 'edicao-tarefas/:id', component: EdicaoTarefasComponent},
];

//registrando o mapeamento para que seja incluído no app.module
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

//gerando uma classe para exportar toda a configuração
export class AppRoutingModule { }