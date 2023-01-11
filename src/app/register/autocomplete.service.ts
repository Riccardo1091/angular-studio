import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
//import { filter, map } from 'rxjs';

interface Prov {
  nome: string,
  sigla: string
  regione: string
}

interface Com {
  nome: string,
  codice: string,
  zona: { codice: string, nome: string, },
  regione: { codice: string, nome: string, },
  provincia: { codice: string, nome: string, },
  sigla: string,
  codiceCatastale: string,
  cap: [string],
  popolazione: number,
}

@Injectable({
  providedIn: 'root'
})
export class AutocompleteService {

  constructor(private http: HttpClient) { }

  getRegioni(): any {
    return this.http.get('http://localhost:9000/regioni')
  }
  getProvince(regione: string, caratteri?: string) {
    return this.http.get<Prov[]>(`http://localhost:9000/province/${regione}/${caratteri}`)
    // .pipe(
    //   map((a: any) => a.filter((a: any) => a.regione.toLowerCase() === regione.toLowerCase()))
    // )
  }
  getComuni(provincia: string, caratteri?: string) {
    return this.http.get<Com[]>(`http://localhost:9000/comuni/${provincia}/${caratteri}`)
    // .pipe(
    //   map((a: any) => a.filter((a: any) => a.provincia.nome.toLowerCase() === provincia.toLowerCase()))
    // )
  }
}
