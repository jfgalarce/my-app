import { Component, computed, inject } from '@angular/core';
import { CharacterListComponent } from '../../dragonball/character-list/character-list.component';
import { DragonballCharacterAddComponent } from '../../dragonball/dragonball-character-add/dragonball-character-add.component';
import { DragonballService } from '../../../services/dragonball.service';

interface Character {
  id: number;
  name: string;
  power: number;
}

@Component({
  selector: 'app-dragonball',
  imports: [CharacterListComponent, DragonballCharacterAddComponent],
  templateUrl: './dragonball-super.component.html',
})
export class DragonballSuperComponent {
  public dragonballService = inject(DragonballService);
  powerClasses = computed(() => {
    return {
      'text-success': true,
    };
  });

}
