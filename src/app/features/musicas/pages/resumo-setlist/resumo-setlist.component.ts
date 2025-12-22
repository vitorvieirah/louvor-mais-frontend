import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Musica } from '../../models/musica.model';
import { Integrante } from '../../models/integrante';
import { SetlistService } from '../../services/setlist.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Setlist } from '../../models/setlist';
import { IntegranteService } from '../../services/musico.service';
import { BotaoVoltarComponent } from "../../components/botao-voltar/botao-voltar.component";

@Component({
  selector: 'app-resumo-setlist',
  standalone: true,
  imports: [CommonModule, FormsModule, BotaoVoltarComponent],
  templateUrl: './resumo-setlist.component.html',
  styleUrl: './resumo-setlist.component.scss'
})
export class ResumoSetlistComponent {
  musicas: Musica[] = [];
  folgas: Integrante[] = [];
  escalados: Integrante[] = [];
  dataSelecionada: string = '';

  constructor(
    private setlistService: SetlistService,
    private integranteService: IntegranteService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.musicas = this.setlistService.getMusicas();
    this.folgas = this.setlistService.getIntegrantes();
    this.carregarTodosIntegrantes();
  }

  carregarTodosIntegrantes(): void {
    this.integranteService.listar().subscribe({
      next: (res) => {
        this.escalados = res.dado.content.filter(
          i => !this.folgas.some(integrante => integrante.id_integrante === i.id_integrante)
        );
      },
      error: (err) => {
        console.error('Erro ao buscar integrantes', err);
      }
    });
  }

  cancelar(): void {
    this.setlistService.reset();
    this.router.navigate(['/menu']);
  }

  salvar(): void {
    const setlistData: Setlist = {
      id_setlist: '',
      data: this.dataSelecionada,
      musicas: this.musicas,
      folgas: this.folgas,
      escalados: this.escalados
    };

    console.log('Todos integrantes', this.escalados);
    console.log('Folgas: ', this.folgas);
    console.log('Escala: ', this.escalados.filter(i => !this.folgas.includes(i)));
    console.log('Setlist', setlistData);


    console.log('Enviando setlist para o backend:', setlistData);
    this.setlistService.cadastrar(setlistData).subscribe({
      next: (res) => {
        console.log('Setlist salvo com sucesso!', res);
        this.setlistService.reset();
        this.router.navigate(['/menu']);
      },
      error: (err) => {
        console.error('Erro ao salvar setlist', err);
      }
    });

    this.setlistService.reset();
    this.router.navigate(['/menu']);
  }
}
