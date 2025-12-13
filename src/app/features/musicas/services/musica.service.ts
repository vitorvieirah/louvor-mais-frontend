import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";
import { Observable } from "rxjs";
import { Musica } from "../models/musica.model";
import { Paginacao } from "../models/paginacao.model";
import { ResponseDto } from "../models/responseDto";

@Injectable({
    providedIn: 'root'
})
export class MusicaService {
    constructor(private http: HttpClient) { }
    

    private readonly URL_API = 'https://louvor-mais-backend.onrender.com/musicas';


    listar(): Observable<ResponseDto<Paginacao<Musica>>> {
        const params = new HttpParams()
            .set('page', '0')
            .set('limit', '20');

        return this.http.get<ResponseDto<Paginacao<Musica>>>(this.URL_API, { params });
    }

    listarPorId(id: string): Observable<ResponseDto<Musica>> {
        return this.http.get<ResponseDto<Musica>>(`${this.URL_API}/${id}`);
    }

    cadastrar(novaMusica: Musica): Observable<ResponseDto<Musica>> {
        console.log('Nova música: ', novaMusica);
        return this.http.post<ResponseDto<Musica>>(this.URL_API, novaMusica);    
    }

    excluirMusica(id: string): Observable<any> {
        return this.http.delete<void>(`${this.URL_API}/${id}`);
    }

    atualizarMusica(musica: Musica): Observable<ResponseDto<Musica>> {
        console.log(musica);
        return this.http.put<ResponseDto<Musica>>(`${this.URL_API}/${musica.id_musica}`, musica);
    }

}