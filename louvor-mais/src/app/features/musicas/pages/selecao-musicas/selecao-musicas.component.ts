import { Component } from '@angular/core';
import { Musica } from '../../models/musica.model';
import { MusicaService } from '../../services/musica.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SetlistService } from '../../services/setlist.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-selecao-musicas',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './selecao-musicas.component.html',
  styleUrl: './selecao-musicas.component.scss',
})
export class SelecaoMusicasComponent {
  musicas: Musica[] = [];
  selectedMusicas: Musica[] = [];
  searchTerm: string = '';
  carregando = false;
  todasMusicas: Musica[] = [];

  constructor(
    private musicaService: MusicaService,
    private router: Router,
    private setlistService: SetlistService
  ) {}

  ngOnInit(): void {
    this.carregarMusicas();
  }

  carregarMusicas(): void {
    this.carregando = true;
    this.musicaService.listar().subscribe({
      next: (res) => {
        this.todasMusicas = res.dado.content;
        this.musicas = [...this.todasMusicas];
        this.carregando = false;
      },
      error: (err) => {
        console.error('Erro ao carregar músicas', err);
        this.carregando = false;
      }
    });
  }

  toggleSelecao(musica: Musica): void {
    const index = this.selectedMusicas.findIndex(m => m.id_musica === musica.id_musica);
    if (index >= 0) {
      this.selectedMusicas.splice(index, 1);
    } else {
      this.selectedMusicas.push(musica);
    }
  }

  isSelecionada(musica: Musica): boolean {
    return this.selectedMusicas.some(m => m.id_musica === musica.id_musica);
  }

  irParaMontagem(): void {
    this.setlistService.setMusicas(this.selectedMusicas);
    this.router.navigate(['/integrantes-setlist']);
  }

  get musicasFiltradas(): Musica[] {
    return this.musicas.filter(m =>
      m.nome.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }
}
