import { Component, Input } from '@angular/core';
import { Progetti } from 'src/app/models/progetti.model';

@Component({
  selector: 'app-progetto-item',
  templateUrl: './progetto-item.component.html',
  styleUrls: ['./progetto-item.component.css']
})
export class ProgettoItemComponent {
  @Input() progetto!: Progetti;
  @Input() count!: number;
  css: any = `<i class="fa-brands fa-css"></i>`
}
