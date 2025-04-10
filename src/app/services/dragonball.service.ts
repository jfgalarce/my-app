import { effect, Injectable, signal } from "@angular/core";
import { Character } from "../interfaces/character.interface";

const loadLocalStorage = ():Character[] => {
  const characters = localStorage.getItem('characters');
  return characters ? JSON.parse(characters) : [];
}


@Injectable({
  providedIn: 'root'
})
export class DragonballService {
  characters = signal<Character[]>(loadLocalStorage());

  saveToLocalStorage =effect(() => {
    console.log('Characters count:', this.characters().length);
    const characters = this.characters();
    localStorage.setItem('characters', JSON.stringify(this.characters()));
  });

  addCharacter(newCharacter: Character) {
    this.characters.update((prev) => [...prev, newCharacter]);
  }
} 