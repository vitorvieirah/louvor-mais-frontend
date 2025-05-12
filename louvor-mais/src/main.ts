import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter, Route } from '@angular/router';
import { importProvidersFrom } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app/app.component';
import { CadastroMusicaComponentComponent } from './app/features/musicas/pages/cadastro-musica-component/cadastro-musica-component.component';
import { ListagemMusicasComponent } from './app/features/musicas/pages/listagem-musicas-component/listagem-musicas-component.component';
import { MusicaInfoComponent } from './app/features/musicas/pages/musica-info/musica-info.component';

const routes: Route[] = [
  { path: 'cadastro-musica', component: CadastroMusicaComponentComponent },
  { path: 'musicas', component: ListagemMusicasComponent},
  { path: 'musica', component: MusicaInfoComponent}
];

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes),
    importProvidersFrom(HttpClientModule) 
  ]
})
  .catch((err) => console.error(err));
