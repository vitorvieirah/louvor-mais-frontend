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
  musicas: Musica[] = [
    {
      id: '1',
      nome: 'Música 1',
      tom: 'C',
      versao: 'Versão 1',
      dificuldade: 'Fácil',
      link: 'https://link1.com',
      cifra: 'Cifra 1'
    },
    {
      id: '2',
      nome: 'Música 2',
      tom: 'D',
      versao: 'Versão 2',
      dificuldade: 'Média',
      link: 'https://link2.com',
      cifra: 'Cifra 2'
    },
    {
      id: '3',
      nome: 'Música 3',
      tom: 'G',
      versao: 'Versão 3',
      dificuldade: 'Difícil',
      link: 'https://link3.com',
      cifra: 'Cifra 3'
    },
    {
      id: '4',
      nome: 'Música 4',
      tom: 'A',
      versao: 'Versão 4',
      dificuldade: 'Fácil',
      link: 'https://link4.com',
      cifra: 'Cifra 4'
    },
    {
      id: '5',
      nome: 'Música 5',
      tom: 'E',
      versao: 'Versão 5',
      dificuldade: 'Média',
      link: 'https://link5.com',
      cifra: 'Cifra 5'
    }
  ];
  carregando = false;

  // constructor(private musicaService: MusicaService) {}

  ngOnInit(): void {
    // this.carregarMusicas();
  }

  carregarMusicas(): void {
    // this.musicaService.listar().subscribe({
    //   next: (res) => {
    //     this.musicas = res.items;
    //     this.carregando = false;
    //   },
    //   error: (err) => {
    //     console.error('Erro ao carregar músicas', err);
    //     this.carregando = false;
    //   }
    // });
  }
}
