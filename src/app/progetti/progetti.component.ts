import { Component } from '@angular/core';
import { Progetti } from '../models/progetti.model';
import { library } from '@fortawesome/fontawesome-svg-core';

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
        'assets/immagini/deliverando1.JPG',
        'assets/immagini/deliverando2.JPG',
        'assets/immagini/deliverando3.JPG'
      ],
      'Layout sviluppato in Bootstrap',
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
        'assets/immagini/windesutry1.JPG',
        'assets/immagini/windesutry2.JPG',
        'assets/immagini/windesutry3.JPG',
        'assets/immagini/windesutry4.JPG',
        'assets/immagini/windesutry5.JPG',
        'assets/immagini/windesutry6.JPG'
      ],
      "Sito E-Commerce di una selezione dei migliori vini Italiani divisi per 5 regioni. Il progetto e' stato sviluppato in un team composto da 5 persone in modalita' Agile Scrum.",
      {
        live: '',
        github: 'https://github.com/FabianSalcedo3/Winedustry'
      })
  ]
}
