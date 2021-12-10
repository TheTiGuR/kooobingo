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
        'Burn Something',
        'Catch a Weapon While Fishing',
        'Center of Third Circle is Northeast',
        'Center of Third Circle is Northwest',
        'Center of Third Circle is Southeast',
        'Center of Third Circle is Southwest',
        'Dies While In The Storm',
        'Eat a Consumable Food Item',
        'Eliminate Aura',
        'Emotes Shortly After Spectating',
        'Find Purple Weapon',
        'Get in Car - Radio OFF',
        'Get in Car - Radio ON',
        'Grey Weapon Elimination',
        'Interacts with NPC',
        'Kill Wildlife',
        'Kill a Purple or Gold Crow',
        'Kill or be Killed While in Vehicle',
        'Killed by Food Related Skin',
        'Killed by an NPC',
        'Kills Llama',
        'Kill With Less Than 10HP Left',
        'Kill via Melee',
        'Koooooom Dies Top 10',
        'Legendary Weapon From Regular Chest',
        'Level Up',
        'Light a Campfire',
        'Max Mats',
        'Open a Supply Drop',
        'Out of Mats after 1st POI',
        'Shield From Big Ammo Crate',
        'Shoots Car',
        'Take the L or Laugh It Up Occurs in Game',
        'Takes Fall Damage',
        'Takes a Rift',
        'Upgrade a Weapon',
        'White Heals From Big Ammo Crate',
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
