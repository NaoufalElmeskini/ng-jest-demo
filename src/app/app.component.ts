import {Component, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  listDesAnimaux: string[] = ['chien', 'canard', 'cheval'];
  nomGagnant?: string;



  processSelected(nom: string) {
    this.nomGagnant = nom;
  }
}
