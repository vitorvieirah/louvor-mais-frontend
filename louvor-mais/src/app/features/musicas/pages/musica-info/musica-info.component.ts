import { Component, Input } from '@angular/core';
import { BotaoVoltarComponent } from '../../components/botao-voltar/botao-voltar.component';
import { Musica } from '../../models/musica.model';
import { Router } from '@angular/router';
import { ModalDeletarComponent } from '../../components/modal-deletar/modal-deletar.component';
import { MusicaService } from '../../services/musica.service';
import { CommonModule, NgIf } from '@angular/common';
import { ModalEditarComponent } from '../../components/modal-editar/modal-editar.component';
import { getDescricaoTomMusica } from '../../../../utils/enum.mapper';

@Component({
  selector: 'app-musica-info',
  standalone: true,
  imports: [BotaoVoltarComponent, ModalDeletarComponent, ModalEditarComponent, CommonModule],
  templateUrl: './musica-info.component.html',
  styleUrl: './musica-info.component.scss'
})
export class MusicaInfoComponent {
  dados!: Musica;
  modalDeletar = false;
  modalEditar = false;

  constructor(
    private router: Router,
    private musicaService: MusicaService
  ) {
    const nav = this.router.getCurrentNavigation();
    this.dados = nav?.extras.state && nav.extras.state['musica'];
    this.dados.tom = getDescricaoTomMusica(this.dados.tom);
  }

  abrirModalDeletar() {
    this.modalDeletar = true;
  }

  fecharModalDeletar() {
    this.modalDeletar = false;
  }

  abrirModalEditar() {
    this.modalEditar = true;
  }

  fecharModalEditar() {
    this.modalEditar = false;
  }

  excluirMusica() {
    console.log(this.dados);
    if (this.dados && this.dados.id_musica) {
      console.log(this.dados.id_musica);
      this.musicaService.excluirMusica(this.dados.id_musica).subscribe(() => {
        this.fecharModalDeletar();
        this.router.navigate(['/musicas']);
      });
    }
  }

  atualizarDados() {
    // Recarregar os dados da música após a atualização
    if (this.dados && this.dados.id_musica) {
      this.musicaService.listarPorId(this.dados.id_musica).subscribe(response => {
        if (response && response.dado) {
          this.dados = response.dado;
        }
      });
    }
  }
}
