import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  optionInput: string = '';
  optionArray: string[] = [];
  loadedOptions: string[] = [];
  cardNumber: number = 1;

  ngOnInit(): void {
    this.setOptions();
  }

  public updateCard(): void {
    this.cardNumber++;
    this.setOptions(this.optionArray);
  }

  public setOptions(options?: string[]) {
    let myOptions: string[];
    if (options && options.length > 22) {
      myOptions = options;
    } else if (this.optionInput !== '') {
      myOptions = this.optionInput.split('\n');
    } else {
      myOptions = [
        '#69 Soccer Skin',
        '200 Pump (1 Shot Kill)',
        'Catch a Weapon While Fishing',
        'Center of Third Circle is Northeast',
        'Center of Third Circle is Northwest',
        'Center of Third Circle is Southeast',
        'Center of Third Circle is Southwest',
        'Takes Fall Damage',
        'Dies While In The Storm',
        'Eat a Consumable Food Item',
        'Eliminate Aura',
        'Emotes Shortly After Spectating',
        'Get in Car - Radio OFF',
        'Get in Car - Radio ON',
        'Get Purple or Better in the Sideways',
        'Grey Weapon Elimination',
        'Interacts with NPC',
        'Kill a Purple or Gold Crow',
        'Kill or be Killed While in Vehicle',
        'Kill Wildlife',
        'Kills Llama',
        'Koooooom Dies Top 10',
        'Light a Campfire',
        'Max Mats',
        'Med Pack From Big Ammo Crate',
        'Melee Kill',
        'Open a Supply Drop',
        'Out of Mats after 1st POI',
        'Shield From Big Ammo Crate',
        'White Heals From Big Ammo Crate',
        'Someone Ghosts to Koooooom',
        'Takes a Rift',
        'Upgrade a Weapon',
        'Killed by an NPC',
        'Killed by Food Related Skin',
        'Shoots Car',
        'Find Purple Weapon',
        'Level Up',
        'Legendary Weapon From Regular Chest',
        'Take the L or Laugh It Up Occurs in Game',
      ];
    }
    this.loadedOptions = myOptions;
    let selectionOptions: string[] = [];
    this.getRandomSelection(this.loadedOptions.length).forEach((num) => {
      selectionOptions.push(myOptions[num]);
    });
    this.optionArray = selectionOptions;
  }

  private getRandomSelection(length: number): number[] {
    let randomOptions: number[] = [];
    while (randomOptions.length < 24) {
      randomOptions.push(Math.floor(Math.random() * length));
      randomOptions = [...new Set(randomOptions)];
    }
    return randomOptions;
  }
}
