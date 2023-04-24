import { Component, Input } from '@angular/core';
import { About } from 'src/app/models/about.model';

@Component({
  selector: 'app-about-item',
  templateUrl: './about-item.component.html',
  styleUrls: ['./about-item.component.css']
})
export class AboutItemComponent {
  @Input() about!: About;
}
