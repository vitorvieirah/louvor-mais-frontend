import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Paginacao } from "../models/paginacao.model";
import { ResponseDto } from "../models/responseDto";
import { Integrante } from "../models/integrante";
import { HttpClient, HttpParams } from "@angular/common/http";

@Injectable({
    providedIn: 'root'
})
export class IntegranteService {
    constructor(private http: HttpClient) { }

    private readonly URL_API = 'https://louvor-mais-backend.onrender.com/integrantes';

    listar(): Observable<ResponseDto<Paginacao<Integrante>>> {
        const params = new HttpParams()
            .set('page', '0')
            .set('limit', '20');

        return this.http.get<ResponseDto<Paginacao<Integrante>>>(this.URL_API, { params });
    }
}