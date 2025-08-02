import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Musica } from '../../models/musica.model';
import { Router } from '@angular/router';
import { IntegranteService } from '../../services/musico.service';
import { Integrante } from '../../models/integrante';
import { FormsModule } from '@angular/forms';
import { SetlistService } from '../../services/setlist.service';

@Component({
  selector: 'app-selecao-folgas.component',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './selecao-folgas.component.component.html',
  styleUrl: './selecao-folgas.component.component.scss'
})
export class SelecaoFolgasComponentComponent {
  integrantes: Integrante[] = [];
  selectedIntegrante: Integrante[] = [];
  searchTerm: string = '';
  carregando = false;
  todosIntegrantes: Integrante[] = [];

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
    this.integranteService.listar().subscribe({
      next: (res) => {
        this.todosIntegrantes = res.dado.content;
        this.integrantes = [...this.todosIntegrantes];
        this.carregando = false;
      },
      error: (err) => {
        console.error('Erro ao carregar músicas', err);
        this.carregando = false;
      }
    });
  }

  toggleSelecao(integrante: Integrante): void {
    const index = this.selectedIntegrante.findIndex(sel => sel.id_integrante === integrante.id_integrante);
    if (index >= 0) {
      this.selectedIntegrante.splice(index, 1);
    } else {
      this.selectedIntegrante.push(integrante);
    }
  }

  isSelecionada(integrante: Integrante): boolean {
    return this.selectedIntegrante.some(sel => sel.id_integrante === integrante.id_integrante);
  }

  irParaMontagem(): void {
    this.setlistService.setIntegrantes(this.selectedIntegrante);
    this.router.navigate(['/resumo-setlist']);
  }

  get integrantesFiltrados(): Integrante[] {
    return this.integrantes.filter(m =>
      m.nome.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }
}
