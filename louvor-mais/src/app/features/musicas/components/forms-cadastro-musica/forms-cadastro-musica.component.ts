import { InputFormsComponent } from './../input-forms/input-forms.component';
import { Component, Output, EventEmitter } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Musica } from '../../models/musica.model';
import { MusicaService } from '../../services/musica.service';

@Component({
  selector: 'app-forms-cadastro-musica',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, InputFormsComponent, HttpClientModule],
  templateUrl: './forms-cadastro-musica.component.html',
  styleUrl: './forms-cadastro-musica.component.scss'
})
export class FormsCadastroMusicaComponent {

  constructor(private musicaService: MusicaService) { }

  @Output() musicaSalva = new EventEmitter<void>();

  musica: Musica = {
    id: '',
    nome: '',
    tom: '',
    versao: '',
    dificuldade: '',
    link: '',
    cifra: ''
  };

  salvar() {
    this.musicaService.cadastrar(this.musica).subscribe({
      next: () => console.log('Música criada com sucesso'),
      error: (err) => console.error('Erro ao criar música', err)
    });
  }

}
