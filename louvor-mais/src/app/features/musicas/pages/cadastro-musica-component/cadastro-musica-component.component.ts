import { Component } from '@angular/core';
import { BotaoVoltarComponent } from '../../components/botao-voltar/botao-voltar.component';
import { FormsCadastroMusicaComponent } from '../../components/forms-cadastro-musica/forms-cadastro-musica.component';

@Component({
  selector: 'app-cadastro-musica-component',
  standalone: true,
  imports: [BotaoVoltarComponent, FormsCadastroMusicaComponent],
  templateUrl: './cadastro-musica-component.component.html',
  styleUrl: './cadastro-musica-component.component.scss'
})
export class CadastroMusicaComponentComponent {

}
