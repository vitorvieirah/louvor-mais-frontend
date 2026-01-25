import { Integrante } from './../../models/integrante';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Setlist } from '../../models/setlist';
import { Router } from '@angular/router';
import { SetlistService } from '../../services/setlist.service';
import { ModalDeletarComponent } from '../../components/modal-deletar/modal-deletar.component';
import { IntegranteService } from '../../services/musico.service';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [CommonModule, ModalDeletarComponent],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent {
  setlists: Setlist[] = [];
  modalDeletar = false;
  idSetlistSelectd: string = '';

  constructor(
    private router: Router,
    private setlistService: SetlistService
  ) { }

  ngOnInit(): void {
    this.carregarSetlists();
  }

  carregarSetlists(): void {
    this.setlistService.listar().subscribe({
      next: (res) => {
        this.setlists = res.dado.content;
      },
      error: (err) => {
        console.error('Erro ao buscar setlists', err);
      }
    });
  }

  criarSetlist(): void {
    this.router.navigate(['/integrantes-setlist']);
  }

  irParaMusicas(): void {
    this.router.navigate(['/musicas']);
  }

  abrirModalDeletar(setlistId: string) {
    this.idSetlistSelectd = setlistId;
    this.modalDeletar = true;
  }

  fecharModalDeletar() {
    this.modalDeletar = false;
  }

  deletar(): void {
    if (this.idSetlistSelectd)
      this.setlistService.deletar(this.idSetlistSelectd);
    this.fecharModalDeletar();
    window.location.reload();
  }

  compartilhar(setlist: Setlist): void {
    console.log(setlist);
    const dataFormatada = new Date(setlist.data).toLocaleDateString('pt-BR');

    const escala = this.getEscala(setlist) || 'Nenhum integrante na escala';

    const musicas = setlist.musicas.map(m =>
      `- ${m.nome} - ${m.artista} // TOM ${m.tom.toUpperCase()}`
    ).join('\n\n') || 'Nenhuma música adicionada';

    const texto = `Culto de Domingo - ${dataFormatada}

ESCALA:
${escala}

______________________________________

SETLIST:

${musicas}

______________________________________

Playlist:
https://youtube.com/playlist?list=PLGw2dpmuWu_reERIsGixYkF1nK9zKMiWn&si=yfLKNxq5th1xst43`;

    navigator.clipboard.writeText(texto).then(() => {
      alert('Setlist copiado para a área de transferência!');
    }).catch(err => {
      console.error('Erro ao copiar texto:', err);
    });
  }


  getEscala(setlist: Setlist): string {
    const emojisPorFuncao: { [key: string]: string } = {
      'VOCAL': '🎤 - Vocal:',
      'BATERIA': '🥁 - Bateria:',
      'BAIXO': '🎸 - Baixo:',
      'VIOLAO': '🎸 - Violao:',
      'GUITARRA': '🎸 - Guitarra:',
      'TECLADO': '🎹 - Teclado:',
      'DM': '🎤 - DM:',
    };

    const linhas: string[] = [];

    Object.keys(emojisPorFuncao).forEach(funcao => {
      const integrante = setlist.escalados.find(i => i.funcao === funcao);
      const nome = integrante ? integrante.nome : '🚫';
      linhas.push(`${emojisPorFuncao[funcao]} ${nome}`);
    });

    return linhas.join('\n');
  }

  abrirLinks(setlist: Setlist): void {
    const youtubePlaylistUrl = 'https://youtube.com/playlist?list=PLGw2dpmuWu_reERIsGixYkF1nK9zKMiWn&si=yfLKNxq5th1xst43';

    
    setlist.musicas.forEach(musica => {
      if (musica.link) {
        window.open(musica.link, '_blank');
      }
    });

   
    window.open(youtubePlaylistUrl, '_blank');
  }

}
