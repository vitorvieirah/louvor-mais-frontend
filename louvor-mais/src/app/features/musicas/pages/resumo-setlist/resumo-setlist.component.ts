import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Musica } from '../../models/musica.model';
import { Integrante } from '../../models/integrante';
import { SetlistService } from '../../services/setlist.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Setlist } from '../../models/setlist';

@Component({
  selector: 'app-resumo-setlist',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './resumo-setlist.component.html',
  styleUrl: './resumo-setlist.component.scss'
})
export class ResumoSetlistComponent {
  musicas: Musica[] = [];
  integrantes: Integrante[] = [];
  dataSelecionada: string = '';

  constructor(
    private setlistService: SetlistService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.musicas = this.setlistService.getMusicas();
    this.integrantes = this.setlistService.getIntegrantes();
  }

  cancelar(): void {
    this.setlistService.reset();
    this.router.navigate(['/musicas']); // ou rota inicial
  }

  salvar(): void {
    const setlistData: Setlist = {
      id_setlist: '',
      data: this.dataSelecionada,
      musicas: this.musicas,
      folgas: this.integrantes
    };

    console.log('Enviando setlist para o backend:', setlistData);
    this.setlistService.cadastrar(setlistData).subscribe({
      next: (res) => {
        console.log('Setlist salvo com sucesso!', res);
        this.setlistService.reset();
        this.router.navigate(['/musicas']);
      },
      error: (err) => {
        console.error('Erro ao salvar setlist', err);
      }
    });

    this.setlistService.reset();
    this.router.navigate(['/musicas']);
  }
}
