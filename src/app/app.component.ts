import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { RouterOutlet, RouterModule, Routes } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HttpClientModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'louvor-mais';

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get('https://sua-api-no-render.onrender.com/ping').subscribe({
      next: () => console.log('API acordada!'),
      error: err => console.error('Erro ao acordar a API:', err)
    });
  }

}