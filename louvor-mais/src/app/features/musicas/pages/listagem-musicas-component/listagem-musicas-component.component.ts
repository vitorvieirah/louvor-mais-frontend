import { Component } from '@angular/core';
import { PesquisaComponent } from '../../components/pesquisa-component/pesquisa-component.component';
import { BotaoVoltarComponent } from '../../components/botao-voltar/botao-voltar.component';
import { NenhumaMusicaContentComponent } from '../../components/nenhuma-musica-content/nenhuma-musica-content.component';

@Component({
  selector: 'app-listagem-musicas-component',
  standalone: true,
  imports: [PesquisaComponent, BotaoVoltarComponent, NenhumaMusicaContentComponent],
  templateUrl: './listagem-musicas-component.component.html',
  styleUrl: './listagem-musicas-component.component.scss'
})
export class ListagemMusicasComponent {

}
