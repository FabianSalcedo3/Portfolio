import { Component, OnInit } from '@angular/core';
import { About } from '../models/about.model';
import { faTerminal } from '@fortawesome/free-solid-svg-icons';
import { faLaptopCode } from '@fortawesome/free-solid-svg-icons';
import { faHandSparkles } from '@fortawesome/free-solid-svg-icons';
import { faUserInjured } from '@fortawesome/free-solid-svg-icons';
import { faPeopleGroup } from '@fortawesome/free-solid-svg-icons';
import { faHandshake } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {

  aboutList: About[] = [
    new About(faTerminal, 'Back End', 'Amo algoritmi e software design. Creazione API REST, metodi CRUD e progettazione ORM'),
    new About(faLaptopCode, 'Front End', 'Responsive layouts, API fetch e ottimizzazione delle performance'),
    new About(faHandSparkles, 'Best Practice', 'Codice pulito, rispetto linee guida, convenzioni e design patterns'),
    new About(faUserInjured, 'Self-Taught Survivor', 'Ricerche Google, lettura messaggi di errore e lettura della documentazione'),
    new About(faPeopleGroup, 'Team Buddy', 'GitHub workflow sfruttando branches, pull requests e code reviews. Esperienza in metodologia Agile'),
    new About(faHandshake, 'Learning & Sharing', 'Le migliori esperienze di coding sono quelle fatte insieme ad altri. Credo fortemente nella sinergia del gruppo')
  ];

}
