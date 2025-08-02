import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Setlist } from '../../models/setlist';
import { Router } from '@angular/router';
import { SetlistService } from '../../services/setlist.service';
import { ModalDeletarComponent } from '../../components/modal-deletar/modal-deletar.component';

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
    this.router.navigate(['/musicas-setlist']);
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
    if(this.idSetlistSelectd)
      this.setlistService.deletar(this.idSetlistSelectd);
    this.fecharModalDeletar();
    window.location.reload();
  }

  compartilhar(setlist: Setlist): void {
    // Aqui você pode gerar link ou usar Web Share API
    console.log('Compartilhando setlist:', setlist);
  }
}
