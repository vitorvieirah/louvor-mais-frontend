import { Component, Input, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Musica } from '../../models/musica.model';

@Component({
  selector: 'app-musica',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './musica.component.html',
  styleUrl: './musica.component.scss'
})
export class MusicaComponent {
  @Input() dados!: Musica;
  @Output() musicaClicada = new EventEmitter<any>();
  link?: string;

  @Output() linkCopiado = new EventEmitter<void>();

  ngOnInit() {
    if (this.dados) {
      this.link = this.dados.link;
    }
  }

  copiarTexto() {
    if (this.link) {
      navigator.clipboard.writeText(this.link)
        .then(() => {
          console.log('Texto copiado com sucesso!');
          this.linkCopiado.emit();
        })
        .catch(err => {
          console.error('Erro ao copiar texto: ', err);
        });
    }
  }

  onMusicaClick() {
    this.musicaClicada.emit(this.dados);
  }
}
