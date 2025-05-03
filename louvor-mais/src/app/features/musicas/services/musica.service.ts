import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";
import { Observable } from "rxjs";
import { Musica } from "../models/musica.model";
import { Paginacao } from "../models/paginacao.model";

@Injectable({
    providedIn: 'root'
})
export class MusicaService {
    constructor(private http: HttpClient){}

    private readonly URL_API = 'http://localhost:8080/musicas';
    
    listar(): Observable<Paginacao<Musica>> {
        const params = new HttpParams()
            .set('page', '0')
            .set('limit', '20');

        return this.http.get<Paginacao<Musica>>(this.URL_API, {params});
    }
}