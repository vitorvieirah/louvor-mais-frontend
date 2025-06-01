import { Routes } from '@angular/router';
import { CadastroMusicaComponentComponent } from './features/musicas/pages/cadastro-musica-component/cadastro-musica-component.component';
import { ListagemMusicasComponent } from './features/musicas/pages/listagem-musicas-component/listagem-musicas-component.component';
import { AppComponent } from './app.component';
import { MusicaInfoComponent } from './features/musicas/pages/musica-info/musica-info.component';

export const routes: Routes = [
    { path: 'cadastro-musica', component: CadastroMusicaComponentComponent },
    { path: 'musicas', component: ListagemMusicasComponent },
    { path: 'musica', component: MusicaInfoComponent },
    { path: '', redirectTo: '/musicas', pathMatch: 'full' } 
];
