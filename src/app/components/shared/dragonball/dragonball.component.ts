import { NgClass } from '@angular/common';
import { Component, computed, signal } from '@angular/core';

interface Character {
  id: number;
  name: string;
  power: number;
}

@Component({
  selector: 'app-dragonball',
  imports: [NgClass],
  templateUrl: './dragonball.component.html',
})
export class DragonballComponent {
  name = signal<string>('Gohan');
  power = signal<number>(100);
  characters = signal<Character[]>([
    {
      id: 1,
      name: 'Goku',
      power: 9001,
    }
    // ,
    // {
    //   id: 2,
    //   name: 'Vegeta',
    //   power: 8500,
    // },
    // {
    //   id: 3,
    //   name: 'Gohan',
    //   power: 8000,
    // },
    // {
    //   id: 4,
    //   name: 'Yamcha',
    //   power: 400,
    // }
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
