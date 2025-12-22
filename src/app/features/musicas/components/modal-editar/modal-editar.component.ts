import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Musica } from '../../models/musica.model';
import { MusicaService } from '../../services/musica.service';
import { InputFormsComponent } from '../input-forms/input-forms.component';
import { SelectInputComponentComponent } from '../select-input-component/select-input-component.component';

@Component({
  selector: 'app-modal-editar',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, CommonModule, InputFormsComponent, SelectInputComponentComponent],
  templateUrl: './modal-editar.component.html',
  styleUrl: './modal-editar.component.scss'
})
export class ModalEditarComponent implements OnInit {
  @Input() musica!: Musica;
  @Output() fecharModal = new EventEmitter<void>();
  @Output() musicaAtualizada = new EventEmitter<void>();

  musicaEditada: Musica = {
    id_musica: '',
    nome: '',
    tom: '',
    versao: '',
    dificuldade: '',
    link: '',
    cifra: ''
  };

  tons = [
    { value: 'C', label: 'C (Dó)' },
    { value: 'CM', label: 'Cm (Dó menor)' },
    { value: 'C_SHARP_D_FLAT', label: 'C#/Db (Dó#/Réb)' },
    { value: 'C_SHARP_D_FLAT_M', label: 'C#m/Dbm (Dó# menor/Réb menor)' },
    { value: 'D', label: 'D (Ré)' },
    { value: 'DM', label: 'Dm (Ré menor)' },
    { value: 'D_SHARP_E_FLAT', label: 'D#/Eb (Ré#/Mib)' },
    { value: 'D_SHARP_E_FLAT_M', label: 'D#m/Ebm (Ré# menor/Mib menor)' },
    { value: 'E', label: 'E (Mi)' },
    { value: 'EM', label: 'Em (Mi menor)' },
    { value: 'F', label: 'F (Fá)' },
    { value: 'FM', label: 'Fm (Fá menor)' },
    { value: 'F_SHARP_G_FLAT', label: 'F#/Gb (Fá#/Solb)' },
    { value: 'F_SHARP_G_FLAT_M', label: 'F#m/Gbm (Fá# menor/Solb menor)' },
    { value: 'G', label: 'G (Sol)' },
    { value: 'GM', label: 'Gm (Sol menor)' },
    { value: 'G_SHARP_A_FLAT', label: 'G#/Ab (Sol#/Láb)' },
    { value: 'G_SHARP_A_FLAT_M', label: 'G#m/Abm (Sol# menor/Láb menor)' },
    { value: 'A', label: 'A (Lá)' },
    { value: 'AM', label: 'Am (Lá menor)' },
    { value: 'A_SHARP_B_FLAT', label: 'A#/Bb (Lá#/Sib)' },
    { value: 'A_SHARP_B_FLAT_M', label: 'A#m/Bbm (Lá# menor/Sib menor)' },
    { value: 'B', label: 'B (Si)' },
    { value: 'BM', label: 'Bm (Si menor)' }
  ];

  dificuldades = [
    { value: 'FACIL', label: 'Fácil' },
    { value: 'MEDIA', label: 'Média' },
    { value: 'DIFICIL', label: 'Difícil' }
  ];

  constructor(private musicaService: MusicaService) {}

  ngOnInit(): void {
    // Clonar o objeto para não modificar o original diretamente
    this.musicaEditada = { ...this.musica };
  }

  fechar(): void {
    this.fecharModal.emit();
  }

  salvar(): void {
    const tomSelecionado = this.tons.find(t => t.value === this.musica.tom);
    if (tomSelecionado) {
      this.musicaEditada.tom = tomSelecionado.value;
    }

  
    const dificuldadeSelecionada = this.dificuldades.find(d => d.value === this.musica.dificuldade);
    if (dificuldadeSelecionada) {
      this.musicaEditada.dificuldade = dificuldadeSelecionada.value;
    }

    this.musicaService.atualizarMusica(this.musicaEditada).subscribe({
      next: () => {
        console.log('Música atualizada com sucesso');
        this.musicaAtualizada.emit();
        this.fecharModal.emit();
      },
      error: (err) => console.error('Erro ao atualizar música', err)
    });
  }
}