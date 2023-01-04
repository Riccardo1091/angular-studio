import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';


export interface Cane {
  name: string
  subtitle: string
  url: string
  description: string
}

// export let cardsUrl: string[] = [
//   'https://i.picsum.photos/id/420/300/200.jpg?hmac=cPuKqwwdRbEWUFib42oVBguxkg_eSnevKAu1qXARZ2g',
//   'https://i.picsum.photos/id/87/300/200.jpg?hmac=0GvfEl8jImRqAL7aoLaiqtztQYhREUEF4As058jWmFA',
//   'https://i.picsum.photos/id/108/300/200.jpg?hmac=MlabGxfxtDtB-KQ3LOCPKm2RZY7B6Xuaj8ERJzQTgoE',
//   'https://i.picsum.photos/id/185/300/200.jpg?hmac=NRgVq0nYX5DKDbKu2HwUPzwfwnkCObUj-JZdr_1CFmU',
//   'https://i.picsum.photos/id/573/300/200.jpg?hmac=xh_OGIi3Lssumlx1x8W_PscpGn95vDFKqe-XhEW0a-g',
// ]

export let cani: Cane[] = [
  { name: "Gino", subtitle: "Razza1", url: 'https://picsum.photos/id/237/300/200', description: "Lorem ipsum dolor sit amet sit amet, consectetur adipiscing elit" },
  { name: "Pino", subtitle: "Razza2", url: 'https://picsum.photos/id/300/300/200', description: "Lorem ipsum dolor sit dolor sit amet sit amet sit amet, consectetur adipiscing elit dolor sit amet sit" },
  { name: "Lino", subtitle: "Razza3", url: 'https://picsum.photos/id/257/300/200', description: "Lorem ipsum dolor sit amet sit amet, consectetur adipiscing elit consectetur adipiscing" },
  { name: "Dino", subtitle: "Razza4", url: 'https://picsum.photos/id/437/300/200', description: "Lorem ipsum dolor sit amet sit amet, consectetur adipiscing elit" },
  { name: "Rino", subtitle: "Razza5", url: 'https://picsum.photos/id/137/300/200', description: "Lorem ipsum dolor sit amet dolor sit amet sit sit amet, consectetur adipiscing elit" },
  { name: "Mino", subtitle: "Razza6", url: 'https://picsum.photos/id/238/300/200', description: "Dlor sit amet sit Lorem ipsum dolor sit amet sit amet, consectetur adipiscing elit" },
]

@Injectable({
  providedIn: 'root'
})

export class CardsService {

  public array: BehaviorSubject<Cane[]> = new BehaviorSubject(cani)

  constructor(private http: HttpClient) { }

  fetchImgCane() {
    return this.http.get<string>(`http://localhost:9000/randomImg`)
  }

  addCane(cane: Cane) {
    this.array.next([...this.array.value, cane])
  }
}
