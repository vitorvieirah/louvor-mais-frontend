import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-botao-voltar',
  standalone: true,
  imports: [],
  templateUrl: './botao-voltar.component.html',
  styleUrl: './botao-voltar.component.scss'
})
export class BotaoVoltarComponent {

  @Input() url: string = '';

  constructor(private router: Router) {}

  voltar() {
    this.router.navigate([this.url]);  
  }
}
