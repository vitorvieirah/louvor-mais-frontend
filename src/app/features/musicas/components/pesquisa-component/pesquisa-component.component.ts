import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-pesquisa-component',
  standalone: true,
  imports: [],
  templateUrl: './pesquisa-component.component.html',
  styleUrl: './pesquisa-component.component.scss'
})
export class PesquisaComponent {
  @Output() textoBusca = new EventEmitter<string>();

  onInput(event: Event) {
    const texto = (event.target as HTMLInputElement).value;
    this.textoBusca.emit(texto);
  }
}
