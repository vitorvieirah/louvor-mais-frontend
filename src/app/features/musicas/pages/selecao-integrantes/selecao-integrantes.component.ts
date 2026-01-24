import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IntegranteService } from '../../services/musico.service';
import { Integrante } from '../../models/integrante';
import { FormsModule } from '@angular/forms';
import { SetlistService } from '../../services/setlist.service';
import { BotaoVoltarComponent } from "../../components/botao-voltar/botao-voltar.component";
import { FUNCOES_INTEGRANTES, FuncaoIntegrante } from '../../models/funcao-integrante.model';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-selecao-integrantes',
  standalone: true,
  imports: [CommonModule, FormsModule, BotaoVoltarComponent],
  templateUrl: './selecao-integrantes.component.html',
  styleUrl: './selecao-integrantes.component.scss'
})
export class SelecaoIntegrantesComponent {
  todosIntegrantes: Integrante[] = []; // Todos os integrantes carregados
  integrantesDisponiveisParaFuncaoAtual: Integrante[] = []; // Integrantes filtrados pela função atual
  selectedIntegrantesByFuncao: { [key: string]: Integrante[] } = {}; // Integrantes selecionados por função
  
  funcoes: FuncaoIntegrante[] = FUNCOES_INTEGRANTES;
  currentStepIndex: number = 0;
  currentFuncao: FuncaoIntegrante = this.funcoes[0];

  searchTerm: string = '';
  carregando = false;

  constructor(
    private integranteService: IntegranteService,
    private setlistService: SetlistService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.carregarIntegrantes();
  }

  carregarIntegrantes(): void {
    this.carregando = true;
    this.integranteService.listar(0, 10).subscribe({
      next: (res) => {
        this.todosIntegrantes = res.dado.content;
        const totalPages = res.dado.totalPages;

        if (totalPages > 1) {
          const observables = [];
          for (let i = 1; i < totalPages; i++) {
            observables.push(this.integranteService.listar(i, 10));
          }

          forkJoin(observables).subscribe({
            next: (additionalResponses) => {
              additionalResponses.forEach(additionalRes => {
                this.todosIntegrantes = this.todosIntegrantes.concat(additionalRes.dado.content);
              });
              this.updateIntegrantesForCurrentFuncao();
              this.carregando = false;
            },
            error: (err) => {
              console.error('Erro ao carregar páginas adicionais de integrantes', err);
              this.carregando = false;
            }
          });
        } else {
          this.updateIntegrantesForCurrentFuncao();
          this.carregando = false;
        }
      },
      error: (err) => {
        console.error('Erro ao carregar integrantes', err);
        this.carregando = false;
      }
    });
  }

  updateIntegrantesForCurrentFuncao(): void {
    this.integrantesDisponiveisParaFuncaoAtual = this.todosIntegrantes.filter(
      integrante => integrante.funcao.toUpperCase() === this.currentFuncao.value.toUpperCase()
    );
    // Garante que o array para a função atual existe
    if (!this.selectedIntegrantesByFuncao[this.currentFuncao.value]) {
      this.selectedIntegrantesByFuncao[this.currentFuncao.value] = [];
    }
  }

  selectIntegrante(integrante: Integrante): void {
    const currentSelected = this.selectedIntegrantesByFuncao[this.currentFuncao.value];
    const index = currentSelected.findIndex(i => i.id_integrante === integrante.id_integrante);

    if (index > -1) {
      currentSelected.splice(index, 1); // Remove se já estiver selecionado
    } else {
      currentSelected.push(integrante); // Adiciona se não estiver selecionado
    }
  }

  isIntegranteCurrentlySelected(integrante: Integrante): boolean {
    const currentSelected = this.selectedIntegrantesByFuncao[this.currentFuncao.value];
    return currentSelected ? currentSelected.some(i => i.id_integrante === integrante.id_integrante) : false;
  }


  nextStep(): void {
    if (this.currentStepIndex < this.funcoes.length - 1) {
      this.currentStepIndex++;
      this.currentFuncao = this.funcoes[this.currentStepIndex];
      this.updateIntegrantesForCurrentFuncao();
    } else {
      this.irParaMontagem();
    }
  }

  previousStep(): void {
    if (this.currentStepIndex > 0) {
      this.currentStepIndex--;
      this.currentFuncao = this.funcoes[this.currentStepIndex];
      this.updateIntegrantesForCurrentFuncao();
    }
  }

  irParaMontagem(): void {
    this.setlistService.setIntegrantesPorFuncao(this.selectedIntegrantesByFuncao);
    this.router.navigate(['/musicas-setlist']);
  }

  get integrantesFiltrados(): Integrante[] {
    return this.integrantesDisponiveisParaFuncaoAtual.filter(m =>
      m.nome.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }



  get isFirstStep(): boolean {
    return this.currentStepIndex === 0;
  }

  get isLastStep(): boolean {
    return this.currentStepIndex === this.funcoes.length - 1;
  }
}
