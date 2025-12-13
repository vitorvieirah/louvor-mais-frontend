import { Injectable } from '@angular/core';
import { Musica } from '../models/musica.model';
import { Integrante } from '../models/integrante';
import { Setlist } from '../models/setlist';
import { Observable } from 'rxjs';
import { ResponseDto } from '../models/responseDto';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Paginacao } from '../models/paginacao.model';

@Injectable({
    providedIn: 'root'
})
export class SetlistService {
    constructor(private http: HttpClient) { }
    
    private musicasSelecionadas: Musica[] = [];
    private integrantesSelecionados: Integrante[] = [];

    private readonly URL_API = 'https://louvor-mais-backend.onrender.com/setlists';

    setMusicas(musicas: Musica[]) {
        this.musicasSelecionadas = musicas;
    }

    setIntegrantes(integrantes: Integrante[]) {
        this.integrantesSelecionados = integrantes;
    }

    getMusicas(): Musica[] {
        return this.musicasSelecionadas;
    }

    getIntegrantes(): Integrante[] {
        return this.integrantesSelecionados;
    }

    reset() {
        this.musicasSelecionadas = [];
        this.integrantesSelecionados = [];
    }


    cadastrar(setlist: Setlist): Observable<ResponseDto<Setlist>> {
        return this.http.post<ResponseDto<Setlist>>(this.URL_API, setlist);
    }

    listar(): Observable<ResponseDto<Paginacao<Setlist>>> {
        const params = new HttpParams()
            .set('page', '0')
            .set('limit', '20');

        return this.http.get<ResponseDto<Paginacao<Setlist>>>(this.URL_API, { params });
    }

    deletar(id: string): void {
        this.http.delete(`${this.URL_API}/${id}`).subscribe({
            next: (res) => {
                console.log('Setlist deletado com sucesso!', res);
            },
            error: (err) => {
                console.error('Erro ao deletar setlist', err);
            }
        });
    }
}
