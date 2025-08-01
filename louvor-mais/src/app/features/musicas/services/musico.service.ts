import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Paginacao } from "../models/paginacao.model";

@Injectable({
    providedIn: 'root'
})
export class MusicoService {
    listar(): Observable<ResponseDto<Paginacao<Musico>>>
}