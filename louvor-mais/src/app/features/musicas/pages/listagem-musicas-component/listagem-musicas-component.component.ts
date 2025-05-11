import { Component, OnInit } from '@angular/core';
import { PesquisaComponent } from '../../components/pesquisa-component/pesquisa-component.component';
import { BotaoVoltarComponent } from '../../components/botao-voltar/botao-voltar.component';
import { NenhumaMusicaContentComponent } from '../../components/nenhuma-musica-content/nenhuma-musica-content.component';
import { Musica } from '../../models/musica.model';
import { MusicaService } from '../../services/musica.service';
import { MusicaComponent } from '../../components/musica/musica.component';
import { CommonModule, NgIf } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-listagem-musicas-component',
  standalone: true,
  imports: [PesquisaComponent, BotaoVoltarComponent, NenhumaMusicaContentComponent,
    MusicaComponent, CommonModule, HttpClientModule],
  templateUrl: './listagem-musicas-component.component.html',
  styleUrl: './listagem-musicas-component.component.scss'
})
export class ListagemMusicasComponent implements OnInit {
  musicas: Musica[] = [];
  todasMusicas: Musica[] = [];
  notificacaoVisivel = false;
  carregando = false;
  pesquisando = false;

  constructor(private musicaService: MusicaService) { }

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

  mostrarNotificacao() {
    this.notificacaoVisivel = true;
    setTimeout(() => this.notificacaoVisivel = false, 2000);
  }

  filtrarMusicas(texto: string) {
    const termo = texto.trim().toLowerCase();
    this.pesquisando = termo.length > 0;

    this.musicas = this.todasMusicas.filter(m =>
      m.nome.toLowerCase().includes(termo) ||
      m.tom.toLowerCase().includes(termo) ||
      m.versao.toLowerCase().includes(termo) ||
      m.dificuldade.toLowerCase().includes(termo)
    );
  }
}

