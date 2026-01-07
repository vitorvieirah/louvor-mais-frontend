import { InputFormsComponent } from './../input-forms/input-forms.component';
import { Component, Output, EventEmitter } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Musica } from '../../models/musica.model';
import { MusicaService } from '../../services/musica.service';
import { SelectInputComponentComponent } from '../select-input-component/select-input-component.component';

@Component({
  selector: 'app-forms-cadastro-musica',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, InputFormsComponent, HttpClientModule, SelectInputComponentComponent],
  templateUrl: './forms-cadastro-musica.component.html',
  styleUrl: './forms-cadastro-musica.component.scss'
})
export class FormsCadastroMusicaComponent {

  constructor(private musicaService: MusicaService) { }

  @Output() musicaSalva = new EventEmitter<void>();

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

  climas = [
    { value: 'CALMO', label: 'Calmo' },
    { value: 'ALEGRE', label: 'Alegre' },
    { value: 'ANIMADO', label: 'Animado' }
  ];

  musica: Musica = {
    id_musica: '',
    nome: '',
    artista: '',
    tom: '',
    clima: '',
    bpm: 0,
    compositor: '',
    link: '',
    cifra: ''
  };

  salvar(form: any) {
    // Garantir que estamos enviando os valores dos enums e não as descrições
    const musicaParaSalvar = { ...this.musica };
    
    // Encontrar o valor do enum para o tom selecionado
    const tomSelecionado = this.tons.find(t => t.value === this.musica.tom);
    if (tomSelecionado) {
      musicaParaSalvar.tom = tomSelecionado.value;
    }

    // Encontrar o valor do enum para o clima selecionado
    const climaSelecionado = this.climas.find(c => c.value === this.musica.clima);
    if (climaSelecionado) {
      musicaParaSalvar.clima = climaSelecionado.value;
    }
    
    // Adicionar os novos campos
    musicaParaSalvar.artista = this.musica.artista;
    musicaParaSalvar.bpm = this.musica.bpm;
    musicaParaSalvar.compositor = this.musica.compositor;

    this.musicaService.cadastrar(musicaParaSalvar).subscribe({
      next: () => {
        console.log('Música criada com sucesso')
        this.musicaSalva.emit();
        form.resetForm();
      },
      error: (err) => console.error('Erro ao criar música', err)
    });
  }

}
