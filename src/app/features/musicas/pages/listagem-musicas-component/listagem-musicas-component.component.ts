import { Component, OnInit } from '@angular/core';
import { PesquisaComponent } from '../../components/pesquisa-component/pesquisa-component.component';
import { BotaoVoltarComponent } from '../../components/botao-voltar/botao-voltar.component';
import { NenhumaMusicaContentComponent } from '../../components/nenhuma-musica-content/nenhuma-musica-content.component';
import { Musica } from '../../models/musica.model';
import { MusicaService } from '../../services/musica.service';
import { MusicaComponent } from '../../components/musica/musica.component';
import { CommonModule, NgIf } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';

function normalizeString(str: string): string {
  return str.normalize("NFD").replace(/\p{Diacritic}/gu, "");
}

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

  constructor(private musicaService: MusicaService, private router: Router) { }

  ngOnInit(): void {
    this.carregarMusicas();
  }

  carregarMusicas(): void {
    this.carregando = true;
    this.musicaService.listar().subscribe({
      next: (res) => {
        this.todasMusicas = res.dado.content;
        this.musicas = [...this.todasMusicas].sort((a, b) => a.nome.localeCompare(b.nome));
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
    const termo = normalizeString(texto.trim().toLowerCase());
    this.pesquisando = termo.length > 0;

    this.musicas = this.todasMusicas.filter(m =>
      normalizeString(m.nome.toLowerCase()).includes(termo) ||
      normalizeString(m.tom.toLowerCase()).includes(termo) ||
      normalizeString(m.versao.toLowerCase()).includes(termo) ||
      normalizeString(m.dificuldade.toLowerCase()).includes(termo)
    ).sort((a, b) => a.nome.localeCompare(b.nome));
  }

  telaCriar() {
    this.router.navigate(["/cadastro-musica"]); 
  }

  abrirMusicaInfo(musica: Musica) {
    this.router.navigate(['/musica'], { state: { musica } });
  }
}

