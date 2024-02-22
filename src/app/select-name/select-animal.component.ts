import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-select-name',
  templateUrl: './select-animal.component.html',
  styleUrls: ['./select-animal.component.scss']
})
export class SelectAnimalComponent {

  @Input()
  animaux!: string[];

  animalSelectionne?: string;

  @Output()
  $animalSelectionneEventEmetter: EventEmitter<string> = new EventEmitter<string>();

  valider() {
    this.$animalSelectionneEventEmetter.emit(this.animalSelectionne)
  }
}
