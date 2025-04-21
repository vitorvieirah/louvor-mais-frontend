import { Component } from '@angular/core';
import { PesquisaComponent } from '../../components/pesquisa-component/pesquisa-component.component';

@Component({
  selector: 'app-listagem-musicas-component',
  standalone: true,
  imports: [PesquisaComponent],
  templateUrl: './listagem-musicas-component.component.html',
  styleUrl: './listagem-musicas-component.component.scss'
})
export class ListagemMusicasComponent {

}
