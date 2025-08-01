import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Musica } from '../../models/musica.model';
import { Router } from '@angular/router';
import { MusicoService } from '../../services/musico.service';

@Component({
  selector: 'app-selecao-folgas.component',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './selecao-folgas.component.component.html',
  styleUrl: './selecao-folgas.component.component.scss'
})
export class SelecaoFolgasComponentComponent {
  musicos: Musica[] = [];
  selectedMusico: Musica[] = [];
  searchTerm: string = '';
  carregando = false;
  todosMusicos: Musica[] = [];

  constructor(
    private musicoService: MusicoService,
    // private setlistService: SetlistService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.carregarMusicas();
  }

  carregarMusicas(): void {
    this.carregando = true;
    this.musicoService.listar().subscribe({
      next: (res) => {
        this.todosMusicos = res.dado.content;
        this.musicos = [...this.todosMusicos];
        this.carregando = false;
      },
      error: (err) => {
        console.error('Erro ao carregar músicas', err);
        this.carregando = false;
      }
    });
  }

  toggleSelecao(musica: Musica): void {
    const index = this.selectedMusico.findIndex(m => m.id_musica === musica.id_musica);
    if (index >= 0) {
      this.selectedMusico.splice(index, 1);
    } else {
      this.selectedMusico.push(musica);
    }
  }

  isSelecionada(musica: Musica): boolean {
    return this.selectedMusico.some(m => m.id_musica === musica.id_musica);
  }

  irParaMontagem(): void {
    // this.setlistService.setMusicas(this.selectedMusicas);
    this.router.navigate(['/montar-setlist']);
  }

  get musicasFiltradas(): Musica[] {
    return this.musicos.filter(m =>
      m.nome.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }
}
