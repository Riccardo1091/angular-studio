import { Component, OnInit, Pipe, PipeTransform } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable, debounceTime, filter, map, startWith } from 'rxjs';
import { AutocompleteService } from './autocomplete.service';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';

interface Prov {
  nome: string,
  sigla: string
  regione: string
}

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit {
  constructor(private service: AuthService, private autoCompleteService: AutocompleteService) { }

  registerForm!: FormGroup

  regioni: any
  regioniFiltrate!: Observable<{ nome: string }[]>
  province!: Prov[]
  comuni!: any

  ngOnInit(): void {
    this.registerForm = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [Validators.required, Validators.minLength(4)]),
      autocompleteRegioni: new FormControl(null, Validators.required),
      autocompleteProvince: new FormControl(null, Validators.required),
      autocompleteComuni: new FormControl(null, Validators.required)
    })

    // assegnazione dei dati fetchati dal service per le regioni
    this.autoCompleteService.getRegioni().subscribe((data: any[]) => {
      this.regioni = data
      // assegnazione regioni filtrate al cambiamento del valore nell'input di autocompletamento
      this.regioniFiltrate = this.registerForm.get('autocompleteRegioni')!.valueChanges.pipe(
        startWith(''), debounceTime(300), map(val => this.filtroRegioni(val || ''))
      )
    })
  }
  onSelectionRegioni(e: MatAutocompleteSelectedEvent) {
    this.autoCompleteService.getProvince(e.option.value, '').subscribe((data: Prov[]) => {
      // filtro province alla selezione della regione
      this.province = data
      this.registerForm.get('autocompleteProvince')!.valueChanges
        .pipe(startWith(''), debounceTime(300))
        .subscribe((val: string) => {
          this.autoCompleteService.getProvince(e.option.value, val).subscribe((data: Prov[]) => {
            this.province = data
          })
          //this.province = data.filter((a: Prov) => a.nome.toLowerCase().includes(val.toLowerCase()))
        })
    })
  }
  onSelectionProvince(e: MatAutocompleteSelectedEvent) {
    this.autoCompleteService.getComuni(e.option.value, '').subscribe((data: any) => {
      // filtro province alla selezione della regione
      this.comuni = data
      this.registerForm.get('autocompleteComuni')!.valueChanges
        .pipe(startWith(''), debounceTime(300))
        .subscribe((val: string) => {
          this.autoCompleteService.getComuni(e.option.value, val).subscribe((data: any[]) => {
            this.comuni = data
          })
          //this.comuni = data.filter((a: Prov) => a.nome.toLowerCase().includes(val.toLowerCase()))
        })
    })
  }

  // funzione di filtro regione
  filtroRegioni(value: string): any {
    return this.regioni.filter((regione: any) => regione.nome.toLowerCase().includes(value.toLowerCase()));
  }

  onSubmit() {
    console.log(this.registerForm.value)
  }
}
