import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { ListagemMusicasComponent } from './app/features/musicas/pages/listagem-musicas-component/listagem-musicas-component.component';

bootstrapApplication(ListagemMusicasComponent, appConfig)
  .catch((err) => console.error(err));
