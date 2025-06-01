import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nenhuma-musica-content',
  standalone: true,
  imports: [],
  templateUrl: './nenhuma-musica-content.component.html',
  styleUrl: './nenhuma-musica-content.component.scss'
})
export class NenhumaMusicaContentComponent {
  
  constructor(private router: Router){}

  telaCriar() {
    this.router.navigate(["/cadastro-musica"]);  
  }
}
