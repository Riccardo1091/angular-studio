import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { filter, map } from 'rxjs';

interface Prov {
  nome: string,
  sigla: string
  regione: string
}

@Injectable({
  providedIn: 'root'
})
export class AutocompleteService {

  constructor(private http: HttpClient) { }

  getRegioni(): any {
    return this.http.get('http://localhost:9000/regioni')
  }
  getProvince(regione: string) {
    return this.http.get<Prov[]>('http://localhost:9000/province')
      .pipe(
        map((a: any) => a.filter((a: any) => a.regione.toLowerCase() === regione.toLowerCase()))
      )
  }
  getComuni(provincia: string): any {
    return this.http.get<any[]>('http://localhost:9000/comuni')
      .pipe(
        map((a: any) => a.filter((a: any) => a.provincia.nome.toLowerCase() === provincia.toLowerCase()))
      )
  }
}
