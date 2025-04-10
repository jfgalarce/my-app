import { Component, output, signal } from '@angular/core';
import { Character } from '../../../interfaces/character.interface';

@Component({
  selector: 'dragonball-character-add',
  imports: [],
  templateUrl: './dragonball-character-add.component.html'
})
export class DragonballCharacterAddComponent {
  name = signal<string>('');
  power = signal<number>(0);

  newCharacter = output<Character>();

  addCharacter(){
     const newCharacter: Character = {
       //id: this.characters().length + 1,
       id: Math.floor(Math.random() * 1000),
       name: this.name(),
       power: this.power()
     }
    // this.characters.update((prev) => [...prev, newCharacter]);
    this.newCharacter.emit(newCharacter);
     this.name.set('');
     this.power.set(0);
    console.log(newCharacter)
  }
}
