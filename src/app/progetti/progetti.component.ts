import { Component } from '@angular/core';
import { Progetti } from '../models/progetti.model';

@Component({
  selector: 'app-progetti',
  templateUrl: './progetti.component.html',
  styleUrls: ['./progetti.component.css']
})
export class ProgettiComponent {

  progetti: Progetti[] = [
    new Progetti(
      [
        `fa-html5`,
        `fa-css3`,
        `fa-js`
      ],
      'Weather is changing!',
      [
        'assets/immagini/weather1.png',
        'assets/immagini/weather2.png'
      ],
      "Realizzazione di un grafico tramite la libreria Chart.js dell'indice di incremento della temperatura globale",
      {
        live: 'https://fabiansalcedo3.github.io/Weather/',
        github: 'https://github.com/FabianSalcedo3/Weather'
      }),
    new Progetti(
      [
        `fa-html5`,
        `fa-css3`,
        `fa-js`
      ],
      'To-Do List',
      [
        'assets/immagini/todolist1.PNG',
        'assets/immagini/todolist2.PNG',
        'assets/immagini/todolist3.PNG'
      ],
      'Una semplice lista di task da compiere settando il solo giorno sviluppata in JavaScript e stilizzata in CSS',
      {
        live: 'https://fabiansalcedo3.github.io/To-Do-List/',
        github: 'https://github.com/FabianSalcedo3/To-Do-List'
      }),
    new Progetti(
      [
        `fa-html5`,
        `fa-css3`,
        `fa-js`
      ],
      'Deliverando',
      [
        'assets/immagini/deliverando1.jpg',
        'assets/immagini/deliverando2.jpg',
        'assets/immagini/deliverando3.jpg'
      ],
      'Layout responsive sviluppato come esercizio Bootstrap',
      {
        live: 'https://fabiansalcedo3.github.io/Deliverando/',
        github: 'https://github.com/FabianSalcedo3/Deliverando'
      }),
    new Progetti(
      [
        `fa-java`,
        `fa-html5`,
        `fa-css3`,
        `fa-js`,
        `fa-database`
      ],
      'Winedustry',
      [
        'assets/immagini/windesutry1.jpg',
        'assets/immagini/windesutry2.jpg',
        'assets/immagini/windesutry3.jpg',
        'assets/immagini/windesutry4.jpg',
        'assets/immagini/windesutry5.jpg',
        'assets/immagini/windesutry6.jpg'
      ],
      "Sito E-Commerce di una selezione dei migliori vini Italiani divisi per 5 regioni. Il progetto e' stato sviluppato in un team composto da 5 persone in modalita' Agile Scrum.",
      {
        live: '',
        github: 'https://github.com/FabianSalcedo3/Winedustry'
      })
  ]
}
