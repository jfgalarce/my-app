
import { Component, computed, signal } from '@angular/core';
import { CharacterListComponent } from "../../dragonball/character-list/character-list.component";

interface Character {
  id: number;
  name: string;
  power: number;
}

@Component({
  selector: 'app-dragonball',
  imports: [ CharacterListComponent],
  templateUrl: './dragonball-super.component.html',
})
export class DragonballSuperComponent {
  name = signal<string>('');
  power = signal<number>(0);
  characters = signal<Character[]>([
    {
      id: 1,
      name: 'Goku',
      power: 9001,
    },
    {
      id: 2,
      name: 'Vegeta',
      power: 8500,
    }
  ]);
  powerClasses = computed(() => {
    return {
      'text-success': true
    } 
  })
  addCharacter(){
    const newCharacter: Character = {
      id: this.characters().length + 1,
      name: this.name(),
      power: this.power()
    }
    this.characters.update((prev) => [...prev, newCharacter]);
    this.name.set('');
    this.power.set(0);
  }
}
