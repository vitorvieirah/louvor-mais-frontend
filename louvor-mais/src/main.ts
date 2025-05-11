import { bootstrapApplication } from '@angular/platform-browser';
import { provideHttpClient } from '@angular/common/http';
import { ListagemMusicasComponent } from './app/features/musicas/pages/listagem-musicas-component/listagem-musicas-component.component';
import { appConfig } from './app/app.config';
import { CadastroMusicaComponentComponent } from './app/features/musicas/pages/cadastro-musica-component/cadastro-musica-component.component';

bootstrapApplication(CadastroMusicaComponentComponent, {
  ...appConfig,
  providers: [
    ...(appConfig.providers || []),
    provideHttpClient()
  ]
}).catch((err) => console.error(err));
