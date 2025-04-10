import {  Component, input } from '@angular/core';
import { Character } from '../../../interfaces/character.interface';


@Component({
  selector: 'dragonball-character-list',
  imports: [],
  templateUrl: './character-list.component.html',
})
export class CharacterListComponent {
powerClasses() {
throw new Error('Method not implemented.');
} 
  characters = input.required<Character[]>();
}
