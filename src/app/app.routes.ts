import { Routes } from '@angular/router';
import { CadastroMusicaComponentComponent } from './features/musicas/pages/cadastro-musica-component/cadastro-musica-component.component';
import { ListagemMusicasComponent } from './features/musicas/pages/listagem-musicas-component/listagem-musicas-component.component';
import { MusicaInfoComponent } from './features/musicas/pages/musica-info/musica-info.component';
import { SelecaoFolgasComponentComponent } from './features/musicas/pages/selecao-folgas.component/selecao-folgas.component.component';
import { ResumoSetlistComponent } from './features/musicas/pages/resumo-setlist/resumo-setlist.component';
import { MenuComponent } from './features/musicas/pages/menu/menu.component';

export const routes: Routes = [
  { path: 'cadastro-musica', component: CadastroMusicaComponentComponent },
  { path: 'musicas', component: ListagemMusicasComponent },
  { path: 'musica', component: MusicaInfoComponent },
  {
    path: 'musicas-setlist',
    loadComponent: () =>
      import('./features/musicas/pages/selecao-musicas/selecao-musicas.component')
        .then(m => m.SelecaoMusicasComponent)
  },
  { path: 'integrantes-setlist', component: SelecaoFolgasComponentComponent },
  { path: 'resumo-setlist', component: ResumoSetlistComponent },
  { path: 'menu', component: MenuComponent },
  { path: '', redirectTo: '/menu', pathMatch: 'full' }
];
