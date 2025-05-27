import { Component, Input } from '@angular/core';
import { BotaoVoltarComponent } from '../../components/botao-voltar/botao-voltar.component';
import { Musica } from '../../models/musica.model';

@Component({
  selector: 'app-musica-info',
  standalone: true,
  imports: [BotaoVoltarComponent],
  templateUrl: './musica-info.component.html',
  styleUrl: './musica-info.component.scss'
})
export class MusicaInfoComponent {
    @Input() dados!: Musica;
}
