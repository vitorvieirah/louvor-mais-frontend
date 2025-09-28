import { Component } from '@angular/core';

@Component({
  selector: 'app-info-musica',
  standalone: true,
  imports: [],
  templateUrl: './info-musica.component.html',
  styleUrl: './info-musica.component.scss'
})
export class InfoMusicaComponent {
  titulo: string = '';
  valor: string = '';
}
