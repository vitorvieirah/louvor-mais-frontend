import { Component, Input } from '@angular/core';
import { BotaoVoltarComponent } from '../../components/botao-voltar/botao-voltar.component';
import { Musica } from '../../models/musica.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-musica-info',
  standalone: true,
  imports: [BotaoVoltarComponent],
  templateUrl: './musica-info.component.html',
  styleUrl: './musica-info.component.scss'
})
export class MusicaInfoComponent {
   dados!: Musica;

  constructor(private router: Router) {
    const nav = this.router.getCurrentNavigation();
    this.dados = nav?.extras.state && nav.extras.state['musica'];
  }
}
