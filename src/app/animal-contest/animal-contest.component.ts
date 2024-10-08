import { Component } from '@angular/core';

@Component({
  selector: 'app-animal-contest',
  templateUrl: './animal-contest.component.html',
  styleUrls: ['./animal-contest.component.scss']
})
export class AnimalContestComponent {

  listDesAnimaux: string[] = ['chien', 'canard', 'cheval'];
  nomGagnant?: string;



  processSelected(nom: string) {
    this.nomGagnant = nom;
  }

}
