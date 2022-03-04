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
  selectionOptions: string[] = [];
  cardNumber: number = 1;

  ngOnInit(): void {
    this.setOptions();
  }

  public updateCard(): void {
    this.cardNumber++;
    this.selectionOptions = [];
    this.optionArray = [];
    this.getRandomSelection(this.loadedOptions.length).forEach((num) => {
      this.selectionOptions.push(this.loadedOptions[num]);
    });
    this.optionArray = this.selectionOptions;
  }

  public setOptions(options?: string[]) {
    let myOptions: string[];
    if (options && options.length > 22) {
      myOptions = options;
    } else if (this.optionInput !== '') {
      myOptions = this.optionInput.split('\n');
    } else {
      myOptions = [
        '100k points while on Quadcrasher',
        'Acquire Mythic Weapon',
        'Be on the Loot Boat',
        'Bounces on a Spider Web',
        'Buy from Vending Machine',
        'Catch Something On Fire',
        'Catch a Fish While Fishing',
        'Catch a Weapon While Fishing',
        'Center of Third Circle is Northeast',
        'Center of Third Circle is Northwest',
        'Center of Third Circle is Southeast',
        'Center of Third Circle is Southwest',
        'Damaged by Bruce',
        'Damaged by an NPC',
        'Dies In Storm',
        'Drive a Quad Crasher',
        'Eat Food (Fish, fruit, veggies)',
        'Emotes Immediately After New Spectator',
        'First Aid / Bandages From Big Ammo Crate',
        'Get in Car - Radio is OFF',
        'Get in Car - Radio is ON',
        'Gold Weapon From Regular Chest',
        'Grey Weapon Elimination',
        'Hit a Player with a Vehicle',
        'Interacts with NPC',
        'Kill Non-Weapon Dropping Wildlife',
        'Kill With Less Than 10HP Left',
        'Kill a Purple or Gold Crow',
        'Kill a Spiderman',
        'Kill an Aura',
        'Kill or be Killed While in Vehicle',
        'Kill the Bounty or Avoid Being the Bounty',
        'Kill via Melee',
        'Kill while Sliding',
        'Kill with Explosive',
        'Kill with Shotgun',
        'Kill with Sniper',
        'Kills Llama',
        'Knock Down a Logging Tree',
        'Koooooom Dies Top 10',
        'Land at named POI',
        'Launch From Klombo',
        'Level Up',
        'Light a Campfire',
        'Max of at Least One Mat',
        'Open Epic Blue Chest',
        'Open IO / Seven Special Chest',
        'Open a Supply Drop',
        'Opens a cooler',
        'Out of Mats after 1st POI',
        'Purchase from NPC',
        'Ride the Foundation Statue Updraft',
        'Run Out of Ammo After First Fight',
        'Shield From Big Ammo Crate',
        'Shoots Enemy Vehicle',
        'Solid Gold+ Weapon Loadout',
        'Spidey Gloves in First Chest',
        'Takes Fall Damage',
        'Takes a Rift',
        'Upgrade a Weapon',
        'Use A Zipline',
        'Use Chili Splashes',
        'Use Guzzle Juice',
        'Use Med Mist',
        'Visits a vault',
        'Witnesses Take the L or Laugh It Up',
      ];
    }
    this.loadedOptions = myOptions;
    this.getRandomSelection(this.loadedOptions.length).forEach((num) => {
      this.selectionOptions.push(myOptions[num]);
    });
    this.optionArray = this.selectionOptions;
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
